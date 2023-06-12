import React, { useEffect, useState } from 'react'
import BeginTestModal from './BeginTestModal'
import './Home.css'

import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from '../hooks/useCollection'


import { PDFDownloadLink } from "@react-pdf/renderer"

import TestPrint from './TestPrint'


const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentTest, setCurrentTest] = useState('')
  const [currentTestID, setCurrentTestID] = useState('')
  const [currentStudent, setCurrentStudent] = useState('')

  const { user } = useAuthContext() 

  const { setDocument } = useFirestore('students')

  const unfinishedtests = useCollection(`students/${user.uid}/tests`)  

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
    setCurrentStudent(i[1])
  }

  const clicktest = (i) => {
    console.log(i)
    let sumM = 0
    let sumMd = 0
    Object.entries(i.skillsObject.skillsM.skills).forEach(([key, value], index) => {
      sumM += parseInt(value)
    })
    Object.entries(i.skillsObject.skillsM.levels).forEach(([key, value], index) => {
      sumMd += parseInt(value)
    })

    let sumR = 0
    let sumRd = 0
    Object.entries(i.skillsObject.skillsRW.skills).forEach(([key, value], index) => {
      sumR += parseInt(value)
    })
    Object.entries(i.skillsObject.skillsRW.levels).forEach(([key, value], index) => {
      sumRd += parseInt(value)
    })
  }
  
  return (
    <div className='home'>
      {!user.email.includes('educate-one') && 
        <div className='home-inner'>
          <div>
            <div className='home-title'>Start New Test</div>
            <div className='home-test' onClick={() => handleTestClick('3')}>SAT Diagnostic 3</div>
            <div className='home-test'>SAT Diagnostic 4</div>
            {openModal && <BeginTestModal test={currentTest} setCurrentTestID={setCurrentTestID} setOpenModal={setOpenModal} />}
          </div>
          <div className='home-inner-right'>
            {
              (unfinishedtests && unfinishedtests.documents && unfinishedtests.documents.length == 0) &&  
              <div className='home-title'>
                No completed tests
              </div>
            }
            {
              (unfinishedtests && unfinishedtests.documents && unfinishedtests.documents.length > 0) &&  
              <div className='home-title'>
                You've taken the diagnostic on
              </div>
            }

            {unfinishedtests.documents && unfinishedtests.documents.map((i, t) => {
              return <div className='home-test' key={t}>
                  <div onClick={() => clicktest(i)}>{unfinishedtests.documents[t].date}</div>
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
                  return <div className='student-entry' key={n} onClick={() => handleStudentClick(i)}>{i[1].name} </div>
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
              if(t[1].compositeScore){
                return <PDFDownloadLink className='link' document={<TestPrint info={t[1]}/>} key={i}>
                  {({loading}) => (loading ? <button>Loading</button> : <button className='student-entry'>{t[1].date}</button>)}
                </PDFDownloadLink>      
              }
            })
          }
        </div>
    </div>
  )
}

export default Home