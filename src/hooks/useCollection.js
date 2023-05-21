import{ useState, useEffect } from 'react'
import { db } from '../config'

import { collection, onSnapshot } from 'firebase/firestore'

export function useCollection(c) {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() =>  {
    let ref = collection(db, c)

    const unsub = onSnapshot(ref, snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      console.log('coud not fetch')
    })

    return () => unsub()
  }, [c])

  return { documents, error }
}

