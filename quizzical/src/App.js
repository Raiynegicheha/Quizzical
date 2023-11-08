import './App.css';
//import Questions from './Questions';
import { useState } from 'react';
import Quiz from './Quiz';



export default function App() {
  const [quizStart, setQuizStart] = useState(false);

  function startQuiz (){
      setQuizStart(!quizStart)
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '5px', padding: '20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {quizStart? (<Quiz />) :
            <div>
            <div className = "quizzical" >
            <div className= "align">
            <h1 className="heading">Quizzical</h1>
            <p className= "title">Some description if needed</p>
            <button className="start" onClick={startQuiz}>Start Test</button>
            </div>
        
            </div>
            </div>
            }
        </div>
    </div>
  );
}


