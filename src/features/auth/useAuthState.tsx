import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './Auth'
import { login, logout } from '../user/userSlice'

const useAuthState = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(login(loginUser.uid))
      } else {
        dispatch(logout())
      }
    })
    return () => unsubscribe()
  }, [dispatch])

  return
}

export default useAuthState
