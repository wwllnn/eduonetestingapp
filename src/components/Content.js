import React from 'react'
import './Content.css'
import Home from './Home'
import Test from './Test'
import { Routes, Route } from 'react-router-dom'
import SignIn from './SignIn'

import { useAuthContext } from '../hooks/useAuthContext'

const Content = () => {

  const {user, authIsReady} = useAuthContext()

   
  return (
    <div className='content'>
      {authIsReady && 
        <Routes>
          <Route index element={!user ? <SignIn /> : <Home />}/>
          <Route path='satpt3' element={!user ? <SignIn /> : <Test testnumber={3} />}/>
          <Route path='satpt3/:number' element={!user ? <SignIn />: <Test testnumber={3} />}/>
          <Route path='satpt4' element={!user ? <SignIn /> : <Test testnumber={4} />}/>
          <Route path='signin' element={!user ? <SignIn /> : <Home />} />
        </Routes>
      }
    </div>
  )
}

export default Content