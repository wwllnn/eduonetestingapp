import React, { useEffect } from 'react'
import { SAT2023PT3RWM1Q, SAT2023PT4RWM1Q } from '../data.js'
import { Link } from 'react-router-dom'
import Question from './Question.js'
import { useState } from 'react'
import './Test.css'
import gradeModule from '../hooks/gradeModule.js'

const Test = ({testnumber}) => {

  const [currentTest, setCurrentTest] = useState()
  const [currentAnswers, setCurrentAnswers] = useState({})
  const [questionNumber, setQuestionNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [selected, setSelected] = useState()

  console.log(currentAnswers)


  useEffect(() => {
    if(testnumber === 3){
      console.log(SAT2023PT3RWM1Q)
      setCurrentTest(SAT2023PT3RWM1Q)
      setCurrentQuestion(SAT2023PT3RWM1Q[1])
    }
  
    if(testnumber === 4){
      console.log(SAT2023PT4RWM1Q)
      setCurrentTest(SAT2023PT4RWM1Q)
      setCurrentQuestion(SAT2023PT4RWM1Q[1])
    }
  }, [])


  const changeQuestion = (num) => {
    setQuestionNumber(num)
    setSelected(currentAnswers[num])
    if(testnumber === 3){
      setCurrentQuestion(SAT2023PT3RWM1Q[num])
    }
  
    if(testnumber === 4){
      setCurrentQuestion(SAT2023PT4RWM1Q[num])
    }
  }

  const nextQuestion = (num) => {
    num++
    setQuestionNumber(num)
    setSelected('')
    if(testnumber === 3){
      setCurrentQuestion(SAT2023PT3RWM1Q[num])
    }
  
    if(testnumber === 4){
      setCurrentQuestion(SAT2023PT4RWM1Q[num])
    }
  }

  const nextModule = () => {
    gradeModule(currentAnswers, currentTest)
  }
    
  
  return (
    <div className='test'>
      <div className='nav-left'>
        <div className='nav-header'>Reading / Writing 1</div>
        <div className='test-nav'>
          {
            currentTest && Object.keys(currentTest).map(i => {
              return <div key={i} onClick={() => changeQuestion(i)} className={questionNumber == i ? 'active-nav-button' : 'nav-button'}>{i}</div>
            })
          }
        </div>
      </div>
      <div className='test-question'>
        <Question 
          currentQuestion={currentQuestion} 
          currentAnswers={currentAnswers} 
          setCurrentAnswers={setCurrentAnswers} 
          questionNumber={questionNumber} 
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div className='test-right'>
        {questionNumber < 22 && <div className='test-next' onClick={() => nextQuestion(questionNumber)}>Next</div>}
        {questionNumber >= 22 && <div className='test-next' onClick={() => nextModule()}>Next Module</div>}
      </div>
    </div>
  )
}

export default Test