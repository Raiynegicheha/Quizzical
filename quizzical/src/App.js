import './App.css';
import Questions from './Questions';
import



function App() {
  const [quizStart, setQuizStart] = useState(true);

  function startQuiz (){
      setQuizStart(!quizStart)
  }


  return (
    <div>
        {quizStart? (<Questions />) :
        <div>
        <div className = "quizzical">
        <div className= "align">
        <h1 className="heading">Quizzical</h1>
        <p className= "title">React Test</p>
        <button className="start" onClick={startQuiz}>Start Test</button>
        </div>
    
    </div>
    </div>
        }



    </div>
  );
}

export default App;
