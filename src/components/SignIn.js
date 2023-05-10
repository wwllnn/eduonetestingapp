import { useState } from 'react'
import { useSignIn } from '../hooks/useSignIn'


const SignIn = () => {
  const [email, setEmail] = useState('')

  const { error, signin } = useSignIn()

  const handleSignIn = (e) => {
    signin(email)
  }

  return (
    <div onClick={handleSignIn}>SignIn</div>
  )
}

export default SignIn

