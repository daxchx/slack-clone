export interface User {
  profile_picture: string
  email: string
  displayName: string
}

export interface UserRef {
  uid: string
  user: User
}
