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

  useEffect(() => {

    setDocument({email: user.email, name: user.displayName}, user.uid)

  }, [])

  const handleTestClick = (testname) => {
    setOpenModal(true)
    setCurrentTest(testname)
  }
  
  return (
    <div className='home'>
      <div className='home-title'>Available Tests</div>
      <div className='home-test' onClick={() => handleTestClick('3')}>SAT Practice Test 3</div>
      <div className='home-test'>SAT Practice Test 4</div>
      {openModal && <BeginTestModal test={currentTest} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default Home