import React, { useEffect } from 'react'
import { 
  SAT2023PT3RWM1Q, 
  SAT2023PT3RWM2AQ, 
  SAT2023PT3RWM2BQ,
  SAT2023PT3MM1Q, 
  SAT2023PT3MM2AQ,
  SAT2023PT3MM2BQ,
  SAT2023PT4RWM1Q,

       } from '../data.js'
import { Link } from 'react-router-dom'
import Question from './Question.js'
import { useState } from 'react'
import './Test.css'
import gradeModule from '../hooks/gradeModule.js'
import { useFirestore } from '../hooks/useFirestore.js'
import { useAuthContext } from '../hooks/useAuthContext.js'
import { useNavigate } from 'react-router-dom'
import useGrade from '../hooks/useGrade.js'

const Test = ({testnumber}) => {

  const navigate = useNavigate()

  const [currentTest, setCurrentTest] = useState()
  const [currentAnswers, setCurrentAnswers] = useState({})

  const [questionNumber, setQuestionNumber] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [selected, setSelected] = useState()
  const [nextModal, setNextModal] = useState(false)
  const [mathModal, setMathModal] = useState(false)
  const [mathModal2, setMathModal2] = useState(false)
  const [moduleNumber, setModuleNumber] = useState(1)

  const { user } = useAuthContext()   

  const date = new Date();
  const day = date.toDateString()
  const { addDocument, setDocument, state } = useFirestore(`students/${user.uid}/tests`)

  const { prepDataSAT3 } = useGrade()
  
  //gets which number user clicked on and sets state to that test and the 1st question
  console.log(state)
  useEffect(() => {
    if(testnumber === 3){
      setCurrentTest(SAT2023PT3RWM1Q)
      setCurrentQuestion(SAT2023PT3RWM1Q[1])
    }
  
    if(testnumber === 4){
      setCurrentTest(SAT2023PT4RWM1Q)
      setCurrentQuestion(SAT2023PT4RWM1Q[1])
    }
  }, [testnumber])

  //on click for nav, changes the question number and the question state
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

  //on click of the next button, increments the question number and changes the question state
  const nextQuestion = (num) => {
    num++
    setQuestionNumber(num)
    setSelected(currentAnswers[num])
    if(testnumber === 3){
      setCurrentQuestion(currentTest[num])
    }
  
    if(testnumber === 4){
      setCurrentQuestion(currentTest[num])
    }
  }

  //set modal true to next module of r/w
  const nextModule = () => {
    setNextModal(true)
    //setDocument
  }

  //set modal true to 1st math module
  const toMathModule = () => {
    setMathModal(true)
  }

  //setmodal true to 2nd math module
  const nextMathModule = () => {
    setMathModal2(true)
  }

  //for reading writing module 1
  //start rw module2
  const handleSaveandChangeRW1 = () => {
    //grades current module
    const numCorrect = gradeModule(currentAnswers, currentTest)
    if(numCorrect >= 12){
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

  //starts math module 1
  const handleSaveandChangeRW2 = () => {
    //grades current module
    setCurrentTest(SAT2023PT3MM1Q)
    setCurrentQuestion(SAT2023PT3MM1Q[55])
    setQuestionNumber(55)
    setSelected('')
    setModuleNumber(prev => prev + 1)
    
    setMathModal(false)
  }

  const handleSaveandChangeMath = () => {
    //grades current module
    const numCorrect = gradeModule(currentAnswers, currentTest)
    if(numCorrect >= 12){
      setCurrentTest(SAT2023PT3MM2BQ)
      setCurrentQuestion(SAT2023PT3MM2BQ[77])
      setQuestionNumber(77)
    } else if (numCorrect < 12){
      setCurrentTest(SAT2023PT3MM2AQ)
      setCurrentQuestion(SAT2023PT3MM2AQ[77])
      setQuestionNumber(77)
    }
    setSelected('')
    setModuleNumber(prev => prev + 1)
    setMathModal2(false)
  }


  const handleSubmit = async (e) => {
      e.preventDefault()
    if(user){
      //create current date data
      let currentDate = new Date()
      let formattedDate = currentDate.toDateString()

      //create project object to send
      const hello = prepDataSAT3(
        currentAnswers, 
        user.displayName, 
        formattedDate
      )

      const fbDATA = {
        ...hello,
        currentAnswers
      }
      
      const testinfo = await addDocument(fbDATA)
      console.log(testinfo)

      if(state.error == null){
        navigate('/')
      }
    }
  }

  console.log(currentAnswers)

  return (
    <div className='test'>
      {nextModal && <div className='next-modal'> 
        <div className='next-modalcontent'>
          <div className='next-modalexit' onClick={() => setNextModal(false)}>x</div>
          <div className='next-modaltext'>
            Click the button below to save and begin the next module
          </div>
          <div className='next-modalbutton' onClick={() => handleSaveandChangeRW1()}>
            Begin Next Module
          </div>
        </div>
      </div>}

      {mathModal && <div className='next-modal'> 
        <div className='next-modalcontent'>
          <div className='next-modalexit' onClick={() => setMathModal(false)}>x</div>
          <div className='next-modaltext'>
            Click the button below to save and begin the next module
          </div>
          <div className='next-modalbutton' onClick={() => handleSaveandChangeRW2()}>
            Begin Math Module
          </div>
        </div>
      </div>}

      {mathModal2 && <div className='next-modal'> 
        <div className='next-modalcontent'>
          <div className='next-modalexit' onClick={() => setMathModal2(false)}>x</div>
          <div className='next-modaltext'>
            Click the button below to save and begin the next math module
          </div>
          <div className='next-modalbutton' onClick={() => handleSaveandChangeMath()}>
            Begin Math Module
          </div>
        </div>
      </div>}

      <div className='nav-left'>
        {(moduleNumber === 1 || moduleNumber === 2) && <div className='nav-header'>Reading / Writing </div>}
        {(moduleNumber === 3 || moduleNumber === 4) && <div className='nav-header'>Math</div>}

        <div className='test-nav'>
          {
            currentTest && Object.keys(currentTest).map(i => {
              if(i == questionNumber){
              }
              return <div key={i} onClick={() => changeQuestion(i)} className={currentAnswers.hasOwnProperty(i) ? 'answered-nav-button' : questionNumber == i ? 'active-nav-button' : 'nav-button'}>{i}</div>
            })
          }
        </div>
      </div>
      <div className='test-question'>
        <Question 
          currentQuestion={currentQuestion} 
          currentAnswers={currentAnswers} 
          setCurrentAnswers={setCurrentAnswers}

          moduleNumber={moduleNumber}

          questionNumber={questionNumber} 
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div className='test-right'>
        {((questionNumber != 27) && (questionNumber != 54) && (questionNumber != 76) && (questionNumber != 98)) && <div className='test-next' onClick={() => nextQuestion(questionNumber)}>Next</div>}

        {(questionNumber == 27) &&
          <div className='test-next' onClick={() => nextModule()}>Next Module</div>
        }

        {(questionNumber == 54) &&
          <div className='test-next' onClick={() => toMathModule()}>Start Math Module</div>
        }
        {
          (questionNumber == 76) &&
          <div className='test-next' onClick={() => nextMathModule()}>Next Math Module</div>
        }
        {
          (questionNumber == 98) &&
          <div className='test-next' onClick={handleSubmit}>Finish Test</div>
        }
      </div>
    </div>
  )
}

export default Test