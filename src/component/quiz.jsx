import '../styles/quiz.css';
import { useState, useEffect, useRef } from 'react';
import { quizQuestions } from '../assets/question';

export function QuizApp() {
  const [userAnswer, setUseranswer] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(13);
  const [correctionIdnex, setCorrectionidnex] = useState(0);
  const [userQuestion, setUserquestion] = useState(userAnswer[correctionIdnex]);
  const [question, setQuestion] = useState(quizQuestions[questionIndex]);
  const score = useRef(0);
  const answered = useRef(false);
  const selectedAnswer = useRef(null);
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
    console.log(userAnswer);
    console.log(userQuestion);
  }
  function reset() {
    setQuestionIndex(0);
    setQuestion(quizQuestions[0]);
    score.current = 0;
    setUseranswer([]);
  }
  if (questionIndex - 1 === quizQuestions.length) {
    const endPage = (
      <div className='quiz'>
        <hr />
        <p>
          You Scored {score.current} of {quizQuestions.length}
        </p>
        <h2>Review</h2>
        <div className='options'>
          <p>
            <strong>
              {userQuestion.id}.{userQuestion.question}
            </strong>
          </p>
          <ul>
            {Object.entries(userQuestion.options).map(([key, value]) => (
              <li
                key={key}
                className={
                  key === userQuestion.answer
                    ? 'correct'
                    : key === userQuestion.selected
                    ? 'wrong'
                    : ''
                }
                name={key}
              >
                {value}
              </li>
            ))}
          </ul>
          <div className='correction-bottom'>
            <button onClick={displayUserquestion}>Next</button>
            <button onClick={displayPrevUserQuestion}>Previous</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    );
    return endPage;
  } else {
    return (
      <div className='quiz'>
        <h1 className='quiz-title'>Scholar's GENG Quiz App</h1>
        <div className='underline'></div>
        <p className='question-2'>
          {question.id}. {question.question}
        </p>
        <div className='options'>
          <ul>
            {Object.entries(question.options).map(([key, value]) => (
              <li key={key} name={key} onClick={(e) => answer(key, e)}>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className='bottoms'>
          <button onClick={displayQuestion}>Next</button>
          <p className='last'>
            {question.id} of {quizQuestions.length} questions
          </p>
        </div>
      </div>
    );
  }
}
