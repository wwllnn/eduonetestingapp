import React, { useEffect, useState } from 'react'
import BeginTestModal from './BeginTestModal'
import './Home.css'

import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from '../hooks/useCollection'

import { doc, getDoc } from "firebase/firestore";

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentTest, setCurrentTest] = useState('')

  const { user } = useAuthContext() 

  const { setDocument, state } = useFirestore('students')

  const unfinishedtests = useCollection(`students/${user.uid}/tests`)

  console.log(unfinishedtests)

  useEffect(() => {
    setDocument({email: user.email, name: user.displayName}, user.uid)
  }, [])

  const handleTestClick = (testname) => {
    setOpenModal(true)
    setCurrentTest(testname)
  }
  
  return (
    <div className='home'>
      <div className='home-inner'>
        <div>
          <div className='home-title'>Start New Test</div>
          <div className='home-test' onClick={() => handleTestClick('3')}>SAT Practice Test 3</div>
          <div className='home-test'>SAT Practice Test 4</div>
          {openModal && <BeginTestModal test={currentTest} setOpenModal={setOpenModal} />}
        </div>
        <div className='home-inner-right'>
          <div className='home-title'>
            Continue Test
          </div>
          {unfinishedtests.documents && unfinishedtests.documents.map((i, t) => {
            return <div className='home-test'>{unfinishedtests.documents[t].date}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home