import { useEffect, useState } from "react";

import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";
import { useAuthContext } from './useAuthContext'

export const useSignIn = () => {
  const [error, setError] = useState('')

  const { dispatch } = useAuthContext()

  const signin = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user.email)
      dispatch({ type: 'LOGIN', payload: data.user.email})    
    })
    .catch((err) => {
      setError(err.message)
    })
  }

  return {error, signin}
}
