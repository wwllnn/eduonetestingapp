import React from 'react'
import './BeginTestModal.css'
import { Link } from 'react-router-dom'
import { useFirestore } from '../hooks/useFirestore.js'
import { useAuthContext } from '../hooks/useAuthContext'

const BeginTestModal = ({test, setOpenModal, setCurrentTestID}) => {

  let testlink = 'satpt' + test

  return (
    <div className='begintestmodal'>
      <div className='begintestmodal-background'/>
      <div className='begintestmodal-modal'>
        <div className='begintestmodal-exit' onClick={() => setOpenModal(false)}>x</div>
        <div className='begintestmodal-message1'>
          <div className='begintestmodal-message1a'>You're about to take the </div>
          <div className='begintestmodal-message1b'>SAT Diagnostic {test}</div>
        </div>
        <div className='begintestmodal-message2'>Click the Start button below and the assessment will begin.</div>
        <Link className='link' to={testlink}>
          <div className='begintestmodal-start'>Start</div>
        </Link>
      </div>
    </div>
  )
}

export default BeginTestModal