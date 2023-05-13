import React from 'react'
import logo from './logo.png'
import './Navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {

  const { user } = useAuthContext()

  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <img className='logo' src={logo} />
        {user && <div>Welcome, {user.displayName}</div>}
      </div>
    </div>
  )
}

export default Navbar