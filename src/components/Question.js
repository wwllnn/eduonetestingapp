import React from 'react'
import './Question.css'



const Question = ({currentQuestion, currentAnswers, setCurrentAnswers}) => {
  console.log(currentQuestion)

  return (
    <div className='question'>{currentQuestion && currentQuestion.passage}</div>
  )
}

export default Question