import { QuizApp } from './quiz';

export function EndPage({
  userQuestion,
  score,
  quizQuestions,
  displayUserquestion,
  displayPrevUserQuestion,
  reset,
  name,
  mode,
  toggleMode,
}) {
  const review = (
    <div className={mode ? 'light' : 'dark'}>
      <div className={mode ? 'light-quiz' : 'quiz'}>
        <input
          type='checkbox'
          id='mode'
          style={{ display: 'none' }}
          onChange={toggleMode}
        />
        <label style={{ position: 'relative' }} htmlFor='mode'>
          {mode ? 'Light' : 'Dark'}{' '}
          <div
            className={mode ? 'light-circle' : 'dark-circle'}
            htmlFor='mode'
          ></div>
        </label>
        <label htmlFor='mode'></label>
        <p>
          <span
            className='name'
            style={{ fontSize: '1rem', color: mode ? 'black' : 'white' }}
          >
            {name}
          </span>
          , you Scored {score.current} of {quizQuestions.length}
        </p>
        <h2>Review</h2> <div className='underline'></div>
        <p className='question-2'>
          {userQuestion.id}.{userQuestion.question}
        </p>
        <div className='options'>
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
        </div>
        <div className='correction-bottom'>
          <button onClick={displayUserquestion}>Next</button>
          <button onClick={displayPrevUserQuestion}>Previous</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
  return review;
}
