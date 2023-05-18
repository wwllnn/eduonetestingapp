import React, { useState } from 'react'
import BeginTestModal from './BeginTestModal'
import './Home.css'

import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentTest, setCurrentTest] = useState('')
  
  const { user } = useAuthContext() 

  const handleTestClick = (testname) => {
    setOpenModal(true)
    setCurrentTest(testname)
  }
  

  return (
    
    <div className='home'>
      {user && <>
        <div className='home-title'>Available Tests</div>
      <div className='home-test' onClick={() => handleTestClick('3')}>SAT Practice Test 3</div>
      <div className='home-test' onClick={() => handleTestClick('4')}>SAT Practice Test 4</div>
      {openModal && <BeginTestModal test={currentTest} setOpenModal={setOpenModal} />}</>}

    </div>
  )
}

export default Home