import React, { useState, useEffect} from 'react'
import Questions from './Questions'
// import { useState } from 'react'
// import Questions from './Questions';



export default function Quiz() {
  const[quizData, setQuizData] = useState([])

  const fetchQuizData = async () => {
    try{
      const response = await fetch("https://opentdb.com/api.php?amount=5&category=12&difficulty=easy")
      const data = await response.json()
      setQuizData(data.results)
    }
    catch(error){
      console.error("Error fetching Data", error)
    }
  }
  // console.log(fetchQuizData());

  useEffect(()=>{
    fetchQuizData()
  },[])



  

  

   

  return (

    <div>
      <h1>Quiz Test</h1>
      {quizData && quizData.map((result, index)=>( 
      
      <Questions
        key = {index}
        index = {index}
        question = {result.question}
        correctAnswer = {result.correct_answer}
        incorrectAnswer = {result.incorrect_answers}

      />))}
    </div>

  )
}
