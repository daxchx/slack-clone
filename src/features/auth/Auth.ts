import { firebaseApp } from '../../firebase/firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const auth = getAuth(firebaseApp)

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
}

export const signOut = () => {
  return auth.signOut()
}
