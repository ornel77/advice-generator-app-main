import './App.css';
import generateBtn from '../src/assets/icon-dice.svg';
import dividerMobile from '../src/assets/pattern-divider-mobile.svg';
import dividerDesktop from '../src/assets/pattern-divider-desktop.svg';
import { useEffect, useState } from 'react';

function App() {
  const [adviceObj, setAdviceObj] = useState(false)
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdviceObj(data.slip))
      .catch(e => console.error(e)) 
  }, [])


  const hancleClick = async () => {
    await fetch('https://api.adviceslip.com/advice', {
      method: 'GET',
        headers: {
          Accept: 'application/json',
        },
    })
      .then(response => response.json())
      .then(data => {
          setAdviceObj(data.slip)
          console.log("result is ",data.slip);
        
      })
      .catch(e => console.error(e)) 
    console.log(adviceObj);
  };
  

  return (
    
    <div className='advice-container'>
      <h3 className='advice-id'>advice #{adviceObj.id}</h3>
      <p className='advice'>
        &quot;{adviceObj.advice}&quot;
      </p>
      <img src={dividerMobile} alt='' className='divider-mobile' />
      <img src={dividerDesktop} alt="" className="divider-desktop" />
      <button className='generate-btn' onClick={hancleClick}>
        <img src={generateBtn} alt='' className='generate-btn-svg' />
      </button>
    </div>
  );
}

export default App;


