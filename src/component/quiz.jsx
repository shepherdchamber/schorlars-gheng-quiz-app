import '../styles/quiz.css';
import { useState, useEffect, useRef, NonCopyable } from 'react';
import { quizQuestions } from '../assets/question';
import { EndPage } from './review';
import { LoginPage } from './login';
import { QuizBody } from './quiz-body';

export function QuizApp() {
  const [userAnswer, setUseranswer] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(17);
  const [correctionIdnex, setCorrectionidnex] = useState(0);
  const [userQuestion, setUserquestion] = useState(userAnswer[correctionIdnex]);
  const [question, setQuestion] = useState(quizQuestions[questionIndex]);
  const score = useRef(-1);
  const answered = useRef(false);
  const selectedAnswer = useRef(null);
  const [userName, setUserName] = useState('');
  const [started, setStarted] = useState(false);
  const [mode, Setmode] = useState(false);

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
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setQuestion(quizQuestions[questionIndex]);
    document.querySelectorAll('.options li').forEach((li) => {
      return li.classList.remove('correct', 'wrong');
    });
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
      element.target.className = 'correct';
      score.current += 1;
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
    setQuestion(quizQuestions[0]);
    setUseranswer([]);
  }
  if (questionIndex - 1 === quizQuestions.length) {
    return (
      <EndPage
        userQuestion={userQuestion}
        score={score}
        quizQuestions={quizQuestions}
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
        quizQuestions={quizQuestions}
        displayQuestion={displayQuestion}
        userName={userName}
        answer={answer}
        toggleMode={toggleMode}
        mode={mode}
      />
    );
  }
}
