import React, { useEffect } from 'react'
import { SAT2023PT3RWM1Q, SAT2023PT4RWM1Q } from '../data.js'
import { Link } from 'react-router-dom'
import Question from './Question.js'
import { useState } from 'react'
import './Test.css'

const Test = ({testnumber}) => {

  let modulekeys = []
  const [currentTest, setCurrentTest] = useState()
  const [currentAnswers, setCurrentAnswers] = useState({})
  const [questionNumber, setQuestionNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState('')


  useEffect(() => {
    if(testnumber == 3){
      console.log(SAT2023PT3RWM1Q)
      setCurrentTest(SAT2023PT3RWM1Q)
      setCurrentQuestion(SAT2023PT3RWM1Q[1])
    }
  
    if(testnumber == 4){
      console.log(SAT2023PT4RWM1Q)
      setCurrentTest(SAT2023PT4RWM1Q)
      setCurrentQuestion(SAT2023PT4RWM1Q[1])
    }
  }, [])



  const changeQuestion = (num) => {
    setQuestionNumber(num)
    if(testnumber == 3){
      setCurrentQuestion(SAT2023PT3RWM1Q[num])
    }
  
    if(testnumber == 4){
      setCurrentQuestion(SAT2023PT4RWM1Q[num])
    }
  }

  
  return (
    <div className='test'>
      test {testnumber}
      <div className='test-nav'>
        {
          currentTest && Object.keys(currentTest).map(i => {
            return <div key={i} onClick={() => changeQuestion(i)} className={questionNumber == i ? 'active-nav-button' : 'nav-button'}>{i}</div>
          })
        }
      </div>
      <div className='test-question'>
        <Question currentQuestion={currentQuestion} currentAnswers={currentAnswers} setCurrentAnswers={setCurrentAnswers} />
      </div>
      <div className='test-right'>
        <Link to={`/satpt${testnumber}/${1}`}><div className='test-next'>Next</div></Link>
      </div>
    </div>
  )
}

export default Test