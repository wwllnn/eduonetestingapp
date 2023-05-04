import React, { useState } from 'react'
import './Question.css'



const Question = ({currentQuestion, currentAnswers, setCurrentAnswers, setSelected, questionNumber, selected}) => {


  const handleSelect = (letter) => {
    setSelected(letter)
    setCurrentAnswers({...currentAnswers, [questionNumber]:letter})
  }

  return (
    <div className='question'>
      <div className='question-passage'>{currentQuestion && currentQuestion.passage}</div>
      <div className='question-question'>{currentQuestion && currentQuestion.question}</div>

      <div className={selected == 'A' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('A')}>
        <div className={selected == 'A' ? 'question-choiceletterselected' : 'question-choiceletter'}>A</div>
        <div className='question-choice'>{currentQuestion && currentQuestion.choice1}</div>
      </div>

      <div className={selected == 'B' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('B')}>
        <div className={selected == 'B' ? 'question-choiceletterselected' : 'question-choiceletter'}>B</div>
        <div className='question-choice'>{currentQuestion && currentQuestion.choice2}</div>
      </div>      

      <div className={selected == 'C' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('C')}>
        <div className={selected == 'C' ? 'question-choiceletterselected' : 'question-choiceletter'}>C</div>
        <div className='question-choice'>{currentQuestion && currentQuestion.choice3}</div>
      </div>      
      
      <div className={selected == 'D' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('D')}>
        <div className={selected == 'D' ? 'question-choiceletterselected' : 'question-choiceletter'}>D</div>
        <div className='question-choice'>{currentQuestion && currentQuestion.choice4}</div>
      </div>

    </div>
  )
}

export default Question