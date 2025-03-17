export function QuizBody({
  question,
  displayQuestion,
  quizQuestions,
  userName,
  answer,
  mode,
  toggleMode,
}) {
  return (
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
        <h1 className='quiz-title'>Scholar's GENG Quiz App</h1>
        <div className='name'>{userName}</div>
        <div
          style={{ backgroundColor: mode ? 'black' : 'white' }}
          className='underline'
        ></div>{' '}
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
          <button className='next-btn' onClick={displayQuestion}>
            Next
          </button>
          <p className='last'>
            {question.id} of {quizQuestions.length} questions
          </p>
        </div>
      </div>
    </div>
  );
}
