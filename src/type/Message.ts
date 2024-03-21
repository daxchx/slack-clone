import { Timestamp } from 'firebase/firestore'

export interface Message {
  user_id: string
  channel_id: string
  text: string
  create_at: Timestamp
  is_edited: boolean
  update_at: Timestamp
}

export interface MessageRef {
  id: string
  message: Message
}
