import { Timestamp } from 'firebase/firestore'

export interface Channel {
  name: string
  create_at: Timestamp
}

export interface ChannelRef {
  id: string
  channel: Channel
}
