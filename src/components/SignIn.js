import { useState } from 'react'
import { useSignIn } from '../hooks/useSignIn'
import './SignIn.css'


const SignIn = () => {
  const [email, setEmail] = useState('')

  const { error, signin } = useSignIn()

  const handleSignIn = (e) => {
    signin(email)
  }

  return (
    <div className='signin' >
      <div className='signin-button' onClick={handleSignIn}>
        Sign In
      </div>
    </div>
  )
}

export default SignIn

