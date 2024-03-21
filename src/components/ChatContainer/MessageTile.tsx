import { useEffect, useState } from 'react'
import { User } from '../../type/User'
import { Message } from '../../type/Message'
import { getUser } from '../../features/user/userAPI'

interface MessageTileProps {
  message: Message
}
const MessageTile = (message: MessageTileProps) => {
  const [owner, setUser] = useState<User | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const ownerData = await getUser(message.message.user_id)
        if (ownerData) {
          setUser(ownerData)
        }
      } catch (error) {
        setUser(null)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="bg-gray-700 p-3 m-3 rounded-lg">
      <div className="flex items-center mb-2">
        <img src={owner?.profile_picture || './default-user-icon.png'} alt="プロフィール画像" className="w-10 h-10 rounded-full mr-2" />
        <div>
          <div className="text-sm font-semibold">{owner?.displayName || 'unknown'}</div>
          <div className="text-xs text-gray-400">{message.message.create_at.toDate().toLocaleString() || ''}</div>
        </div>
      </div>
      <p className="text-gray-300">{message.message.text}</p>
    </div>
  )
}

export default MessageTile
