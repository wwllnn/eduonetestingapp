import React, { useState } from 'react'
import './Question.css'



const Question = ({
  currentQuestion, 
  currentAnswers, 
  currentAnswers1, 
  currentAnswers2, 
  currentAnswers3, 
  currentAnswers4, 

  setCurrentAnswers, 
  setCurrentAnswers1, 
  setCurrentAnswers2, 
  setCurrentAnswers3, 
  setCurrentAnswers4, 

  moduleNumber,
  setSelected, 
  questionNumber, 
  selected,

  setCurrentInput,
  currentInput
}) => {


  const handleSelect = (letter) => {
    setSelected(letter)
    setCurrentAnswers({...currentAnswers, [questionNumber]:letter})
  }

  const handleInput = (i) => {
    setCurrentInput(i)
    setCurrentAnswers({...currentAnswers, [questionNumber]:i})
  }

  console.log(currentAnswers)
  console.log(currentInput)

  return (
    <div className='question'>
      <div className='question-number'>{questionNumber}</div>
      {currentQuestion && currentQuestion.img &&
        <div>
          <img className='question-image' src={`./` + currentQuestion.img}/>
        </div>
      }

      <p className='question-passage'>{currentQuestion && currentQuestion.passage}</p>
      <div className='question-question'>{currentQuestion && currentQuestion.question}</div>

      {currentQuestion && !currentQuestion.fr && 
            <div>
            <div className={selected == 'A' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('A')}>
              <div className={selected == 'A' ? 'question-choiceletterselected' : 'question-choiceletter'}>A</div>
              <div className='question-choice'>{currentQuestion && currentQuestion.choice1}</div>
              {currentQuestion && <img className='question-choice' src={currentQuestion.choice1img} />}
            </div>
    
            <div className={selected == 'B' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('B')}>
              <div className={selected == 'B' ? 'question-choiceletterselected' : 'question-choiceletter'}>B</div>
              <div className='question-choice'>{currentQuestion && currentQuestion.choice2}</div>
              {currentQuestion && <img className='question-choice' src={currentQuestion.choice2img} />}
            </div>      
    
            <div className={selected == 'C' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('C')}>
              <div className={selected == 'C' ? 'question-choiceletterselected' : 'question-choiceletter'}>C</div>
              <div className='question-choice'>{currentQuestion && currentQuestion.choice3}</div>
              {currentQuestion && <img className='question-choice' src={currentQuestion.choice3img} />}
            </div>      
            
            <div className={selected == 'D' ? 'question-choicelineselected' : 'question-choiceline'} onClick={() => handleSelect('D')}>
              <div className={selected == 'D' ? 'question-choiceletterselected' : 'question-choiceletter'}>D</div>
              <div className='question-choice'>{currentQuestion && currentQuestion.choice4}</div>
              {currentQuestion && <img className='question-choice' src={currentQuestion.choice4img} />}
            </div>
          </div>}
      {currentQuestion && currentQuestion.fr && 
        <input value={currentInput ? currentInput : ''} onChange={(e) => handleInput(e.target.value)} />
      }

    </div>
  )
}

export default Question