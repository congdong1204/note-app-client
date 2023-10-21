import { createContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      console.log('From auth provider', user)
      if (user?.uid) {
        setUser(user)
        localStorage.setItem('accessToken', user?.stsTokenManager?.accessToken)
        return
      }
      // Reset user info
      setUser({})
      localStorage.clear()
      navigate('./login')
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
