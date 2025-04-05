import '../styles/quiz.css';
import Select from 'react-select';

export function LoginPage({
  starQuiz,
  setUserName,
  userName,
  mode,
  toggleMode,
  handleCourse,
  course,
}) {
  const options = [
    { value: 'Math101', label: 'MTH 101' },
    { value: 'GST101', label: 'GST 101' },
    { value: 'dailyQuiz', label: 'Daily Quiz' },
  ];
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
        <div className='underline'></div>{' '}
        <input
          style={{ color: mode ? 'black' : 'white' }}
          className='username-input'
          onChange={(e) => setUserName(e.target.value)}
          type='text'
          value={userName}
          placeholder='Best Man'
        />
        <button className='submit-btn' onClick={starQuiz}>
          Submit
        </button>
      </div>
      <div className='select'>
        <Select
          placeholder='Select course'
          onChange={handleCourse}
          value={course}
          options={options}
          classNamePrefix='mySelect'
        />
      </div>
    </div>
  );
}
