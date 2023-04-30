import React from 'react'
import logo from './logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <img className='logo' src={logo} />
      </div>
    </div>
  )
}

export default Navbar