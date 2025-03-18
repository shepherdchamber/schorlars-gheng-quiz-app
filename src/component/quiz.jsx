import '../styles/quiz.css';
import { useState, useEffect, useRef, NonCopyable } from 'react';
import { shuffled } from '../assets/question';
import { EndPage } from './review';
import { LoginPage } from './login';
import { QuizBody } from './quiz-body';

export function QuizApp() {
  const [userAnswer, setUseranswer] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctionIdnex, setCorrectionidnex] = useState(0);
  const [userQuestion, setUserquestion] = useState(userAnswer[correctionIdnex]);
  const [question, setQuestion] = useState(shuffled[questionIndex]);
  // const [shuffled, setShuffledQuestions] = useState([]);
  const score = useRef(-1);
  const answered = useRef(false);
  const selectedAnswer = useRef(null);
  const [userName, setUserName] = useState('');
  const [started, setStarted] = useState(false);
  const [mode, Setmode] = useState(false);
  const questionNumber = useRef(1);

  // function shuffleQuestions() {
  //   const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  //   setShuffledQuestions(shuffled);

  //   setQuestion(shuffled[0]);
  // }

  function calculateScore() {
    return userAnswer.filter(
      (question) => question.selected === question.correct
    ).length;
  }

  function starQuiz() {
    userName.trim() !== '' ? setStarted(true) : '';
  }

  const toggleMode = () => Setmode((prev) => !prev);

  useEffect(() => {
    setUserquestion(userAnswer[correctionIdnex] || null);
  }, [correctionIdnex, userAnswer]);
  function displayUserquestion() {
    if (correctionIdnex + 1 === userAnswer.length) return;
    else setCorrectionidnex((prev) => prev + 1);
  }

  function displayPrevUserQuestion() {
    if (correctionIdnex === 0) return;
    else setCorrectionidnex((prev) => prev - 1);
  }

  function displayQuestion() {
    setQuestionIndex((prev) => {
      const newIndex = prev + 1;
      setQuestion(shuffled[questionIndex]);
      return newIndex;
    });
    document.querySelectorAll('.options li').forEach((li) => {
      return li.classList.remove('correct', 'wrong');
    });
    questionNumber.current += 1;
    answered.current = false;
    setUseranswer((prev) => {
      const existing = prev.find((prev) => prev.id === question.id);
      if (existing) {
        return prev.map((q) => {
          if (q.id === question.id) {
            return { ...q, selected: selectedAnswer.current };
          }
          return q;
        });
      } else {
        return [
          ...prev,
          {
            id: question.id,
            question: question.question,
            selected: selectedAnswer.current,
            correct: question.answer,
            options: question.options,
          },
        ];
      }
    });
  }
  function answer(ans, element) {
    selectedAnswer.current = ans;
    if (question.answer === ans && answered.current === false) {
      answered.current = true;
      score.current += 1;
      element.target.className = 'correct';
      console.log('correct');
    } else if (question.answer !== ans && answered.current === false) {
      element.target.className = 'wrong';
      answered.current = true;
      document
        .querySelector(`[name = ${question.answer}]`)
        .classList.add('correct');
    }
    setUseranswer((prev) => [
      ...prev,
      {
        id: question.id,
        question: question.question,
        selected: ans,
        correct: question.answer,
        options: question.options,
        answer: question.answer,
      },
    ]);
  }
  function reset() {
    setQuestionIndex(0);
    setQuestion(shuffled[0]);
    setUseranswer([]);
  }
  if (questionNumber.current - 1 === 20) {
    return (
      <EndPage
        userQuestion={userQuestion}
        score={score}
        quizQuestions={shuffled}
        displayPrevUserQuestion={displayPrevUserQuestion}
        displayUserquestion={displayUserquestion}
        reset={reset}
        name={userName}
        mode={mode}
        toggleMode={toggleMode}
      />
    );
  }
  if (!started) {
    return (
      <LoginPage
        starQuiz={starQuiz}
        userName={userName}
        setUserName={setUserName}
        toggleMode={toggleMode}
        mode={mode}
      />
    );
  } else {
    return (
      <QuizBody
        question={question}
        quizQuestions={shuffled}
        displayQuestion={displayQuestion}
        userName={userName}
        answer={answer}
        toggleMode={toggleMode}
        mode={mode}
        questionNumber={questionNumber.current}
      />
    );
  }
}
