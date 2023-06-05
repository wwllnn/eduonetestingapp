import React, { useEffect, useState } from 'react'
import BeginTestModal from './BeginTestModal'
import './Home.css'

import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from '../hooks/useCollection'

import { doc, getDoc } from "firebase/firestore";

import { PDFDownloadLink } from "@react-pdf/renderer"
import ScorePrint from "./ScorePrint"
import useGrade from '../hooks/useGrade'
import TestPrint from './TestPrint'


const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentTest, setCurrentTest] = useState('')
  const [currentTestID, setCurrentTestID] = useState('')
  const [currentStudent, setCurrentStudent] = useState('')

  const { user } = useAuthContext() 

  const { setDocument, state } = useFirestore('students')

  const unfinishedtests = useCollection(`students/${user.uid}/tests`)

  const { gradeSAT2023PT3, prepDataSAT3 } = useGrade()
  

  const students = useCollection('students')

  
  const tests = useCollection(currentStudent ? `students/${currentStudent.id}/tests`: 'students')  

  useEffect(() => {
    setDocument({email: user.email, name: user.displayName}, user.uid)
  }, [])

  const handleTestClick = (testname) => {
    setOpenModal(true)
    setCurrentTest(testname)
  }

  useEffect(() => {
    if(currentStudent){
    }
  }, [currentStudent])

  const handleStudentClick = (i) => {
    console.log(i[1].name)
    console.log(i[1].id)
    setCurrentStudent(i[1])
  }

  const gradeTestClick = (i) => {
    //useGrade()
    console.log(i)
    //console.log(i.date)
    //console.log(i.studentName)
    //const hello = prepDataSAT3(i.currentAnswers, i.studentName, i.date)
    //console.log(hello)
  }

  const clicktest = (i) => {
    console.log(i)
    let sumM = 0
    let sumMd = 0
    Object.entries(i.skillsObject.skillsM.skills).forEach(([key, value], index) => {
      console.log('key ' + key + ' value ' + value)
      sumM += parseInt(value)
    })
    Object.entries(i.skillsObject.skillsM.levels).forEach(([key, value], index) => {
      sumMd += parseInt(value)
    })
    console.log(sumM)
    console.log(sumMd)

    let sumR = 0
    let sumRd = 0
    Object.entries(i.skillsObject.skillsRW.skills).forEach(([key, value], index) => {
      sumR += parseInt(value)
    })
    Object.entries(i.skillsObject.skillsRW.levels).forEach(([key, value], index) => {
      sumRd += parseInt(value)
    })
    console.log(sumR)

    console.log(sumRd)
  }
  
  return (
    <div className='home'>
      
      {!user.email.includes('educate-one') && 
        <div className='home-inner'>
          <div>
            <div className='home-title'>Start New Test</div>
            <div className='home-test' onClick={() => handleTestClick('3')}>SAT Practice Test 3</div>
            <div className='home-test'>SAT Practice Test 4</div>
            {openModal && <BeginTestModal test={currentTest} setCurrentTestID={setCurrentTestID} setOpenModal={setOpenModal} />}
          </div>
          <div className='home-inner-right'>
            <div className='home-title'>
              You've taken the diagnostic on
            </div>
            {unfinishedtests.documents && unfinishedtests.documents.map((i, t) => {
              return <div className='home-test'>
                  <div key={t} onClick={() => clicktest(i)}>{unfinishedtests.documents[t].date}</div>
              </div>
            })}
          </div>
        </div>
        }
        {
          user.email.includes('educate-one') && students && students.documents &&
          <div>
            <div className='student-list-header'>Students</div>
            <div className='student-list'>
              {Object.entries(students.documents).map((i, n) => {
                if(!i[1].email.includes('educate-one.com')){
                  return <div className='student-entry' key={n} onClick={() => handleStudentClick(i)}>{i[1].name}                </div>
                }
              })}
            </div>
          </div>
        }
        <div className='tests-container'>
        {
          currentStudent && <div className='tests-list-header'>{currentStudent.name}</div>
        }
        {
        currentStudent && tests && tests.documents && Object.entries(tests.documents).map((t, i) => {
           return <div key={i} onClick={() => gradeTestClick(t[1])}>{t[1].date}</div>
        })
        }

        </div>
    </div>
  )
}

export default Home