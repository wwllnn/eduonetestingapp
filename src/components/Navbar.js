import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import './Navbar.css'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {

  const { user } = useAuthContext()
  const { logout } = useLogout()

  const [userDisplayName, setUserDisplayName] = useState('')

  useEffect(() => {
    if(user && user.displayName){
     setUserDisplayName(user.displayName)
    }
  })

  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <img className='logo' src={logo} />
        <div className='navbar-innerright'>
          {user && <div>Hello {user.displayName}</div>}
          {user && <div className='navbar-signout' onClick={logout}>Sign out</div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar