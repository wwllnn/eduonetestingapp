import React from 'react'
import './Content.css'
import Home from './Home'
import Test from './Test'
import { Routes, Route } from 'react-router-dom'

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='satpt3' element={<Test testnumber={3} />}/>
        <Route path='satpt3/:number' element={<Test testnumber={3} />}/>

        <Route path='satpt4' element={<Test testnumber={4} />}/>
      </Routes>
    </div>
  )
}

export default Content