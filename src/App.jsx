import './App.css';
import generateBtn from '../src/assets/icon-dice.svg';
import dividerMobile from '../src/assets/pattern-divider-mobile.svg';

function App() {
  return (
    <div className='advice-container'>
      <h3 className='advice-id'>advice #117</h3>
      <p className='advice'>
        &quot;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action.&quot;
      </p>
      <img src={dividerMobile} alt='' className='divider-mobile' />
      <button className='generate-btn'>
        <img src={generateBtn} alt='' className='generate-btn-svg' />
      </button>
    </div>
  );
}

export default App;
