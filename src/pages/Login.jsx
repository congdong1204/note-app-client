import { Button, Typography } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  if (user?.uid) {
    navigate('/')
    return
  }

  const handleLoginWithGoogle = async () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    console.log('res', res)
  }

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: '10px' }}>
        Welcome to Note App
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  )
}

export default Login
