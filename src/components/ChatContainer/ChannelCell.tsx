import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { selectChannel } from '../../features/channel/channelSlice'
import { Channel } from '../../type/Channel'

type Props = {
  channel: Channel
  id: string
}

const ChannelCell = ({ channel, id }: Props) => {
  const dispatch = useAppDispatch()
  const handleChannelName = () => {
    dispatch(selectChannel(id))
  }

  return (
    <div className="px-4 py-1 hover:bg-gray-700">
      <div className="text-gray-300 hover:text-white" onClick={handleChannelName}>
        # {channel.name}
      </div>
    </div>
  )
}

export default ChannelCell
