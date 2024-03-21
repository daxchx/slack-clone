import React, { useEffect, useState } from 'react'
import { ChannelRef } from '../../type/Channel'
import { subscribeChannels } from '../../features/channel/channelAPI'
import ChannelCell from './ChannelCell'
import ChannelAddModal from './ChannelAddModal'

const ChatList = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [channelRefs, setChannelRefs] = useState<ChannelRef[]>([])

  useEffect(() => {
    const unsubscribe = subscribeChannels((channelRefs) => {
      setChannelRefs(channelRefs)
    })
    return () => unsubscribe()
  }, [])
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <div className="w-64 bg-gray-800">
      <div className="px-4 py-3 mb-4 border-b border-gray-700">
        <span className="font-bold text-gray-300">チャンネル</span>
      </div>
      <div className="overflow-y-auto">
        {channelRefs.map(({ channel, id }) => (
          <ChannelCell channel={channel} id={id} key={id} />
        ))}
      </div>
      <div className="px-4 py-2">
        <button className="text-gray-300 hover:text-white" onClick={handleOpenModal}>
          + チャンネルを追加する
        </button>
        {showModal && <ChannelAddModal handleCloseModal={handleCloseModal} />}
      </div>
    </div>
  )
}

export default ChatList
