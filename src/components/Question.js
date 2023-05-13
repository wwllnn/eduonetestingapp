import React, { useState } from 'react'
import './Question.css'



const Question = ({currentQuestion, currentAnswers, setCurrentAnswers, setSelected, questionNumber, selected}) => {

  console.log(currentQuestion, currentAnswers, questionNumber, selected)

  const [currentInput, setCurrentInput] = useState('')

  const handleSelect = (letter) => {
    setSelected(letter)
    setCurrentAnswers({...currentAnswers, [questionNumber]:letter})
  }

  const handleInput = (i) => {
    setCurrentAnswers({...currentAnswers, [questionNumber]:i})
  }

  console.log(currentInput)
  console.log(currentAnswers)

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

      {!currentQuestion.fr && 
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
      {currentQuestion.fr && 
        <input onChange={(e) => handleInput(e.target.value)}></input>
      }

    </div>
  )
}

export default Question