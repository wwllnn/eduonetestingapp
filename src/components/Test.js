import React, { useEffect } from 'react'
import { SAT2023PT3RWM1Q, SAT2023PT3RWM2AQ, SAT2023PT3RWM2BQ,
         SAT2023PT4RWM1Q
       } from '../data.js'
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
  const [nextModal, setNextModal] = useState(false)
  const [moduleNumber, setModuleNumber] = useState(1)

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
      setCurrentQuestion(currentTest[num])
    }
  
    if(testnumber === 4){
      setCurrentQuestion(currentTest[num])
    }
  }

  const nextQuestion = (num) => {
    num++
    setQuestionNumber(num)
    setSelected('')
    if(testnumber === 3){
      setCurrentQuestion(currentTest[num])
    }
  
    if(testnumber === 4){
      setCurrentQuestion(currentTest[num])
    }
  }

  const nextModule = () => {
    setNextModal(true)
  }

  const handleSaveandChange = () => {
    const numCorrect = gradeModule(currentAnswers, currentTest)
    if(numCorrect >= 15){
      setCurrentTest(SAT2023PT3RWM2BQ)
      setCurrentQuestion(SAT2023PT3RWM2BQ[28])
      setQuestionNumber(28)
    } else if (numCorrect < 15){
      setCurrentTest(SAT2023PT3RWM2AQ)
      setCurrentQuestion(SAT2023PT3RWM2AQ[28])
      setQuestionNumber(28)
    }
    setSelected('')
    setModuleNumber(prev => prev + 1)

    setNextModal(false)
  }
    
  console.log(moduleNumber)
  console.log(questionNumber)
  console.log(currentTest)
  console.log(currentQuestion)

  
  return (
    <div className='test'>
      {nextModal && <div className='next-modal'> 
        <div className='next-modalcontent'>
          <div className='next-modalexit' onClick={() => setNextModal(false)}>x</div>
          <div className='next-modaltext'>
            Click the button below to save and begin the next module
          </div>
          <div className='next-modalbutton' onClick={() => handleSaveandChange()}>
            Begin Module 2
          </div>
        </div>
      </div>}


      <div className='nav-left'>
        <div className='nav-header'>Reading / Writing </div>
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
        {((questionNumber < 27 && moduleNumber == 1) || (questionNumber < 54 && moduleNumber == 2)) && <div className='test-next' onClick={() => nextQuestion(questionNumber)}>Next</div>}
        {((questionNumber == 27 && moduleNumber == 1) || (questionNumber == 54 && moduleNumber == 2)) &&
          <div className='test-next' onClick={() => nextModule()}>Next Module</div>
        }
      </div>
    </div>
  )
}

export default Test