import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../../firebase/firebaseConfig'
import { User } from '../../type/User'

const db = getFirestore(firebaseApp)

export const getUser = async (user_uid: string) => {
  const usersRef = doc(db, 'users', user_uid)
  const docSnap = await getDoc(usersRef)
  if (docSnap.exists()) {
    return docSnap.data() as User
  }
}
