import { createSlice } from '@reduxjs/toolkit'
import { signInWithGoogle } from '../auth/Auth'
import { getUser, postUser } from './userAPI'
import { User } from '../../type/User'

const initialState = {
  userId: '',
}

export const googleSignInAndUserSetup = async () => {
  try {
    const result = await signInWithGoogle()
    const login_user = result.user
    const user = await getUser(login_user.uid)

    if (!user) {
      const newUser: User = {
        profile_picture: login_user.photoURL ?? '',
        email: login_user.email ?? '',
        displayName: login_user.displayName ?? '',
      }
      await postUser({
        uid: login_user.uid,
        user: newUser,
      })
    }
    return login_user.uid
  } catch (error) {
    console.error('Login failed:', error)
  }
}
export const userSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userId = action.payload
    },
    logout: (state) => {
      state.userId = ''
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
