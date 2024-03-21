import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentChannelId: '',
}

export const channelSlice = createSlice({
  name: 'channelId',
  initialState,
  reducers: {
    selectChannel: (state, action) => {
      state.currentChannelId = action.payload
    },
    clearChannel: (state) => {
      state.currentChannelId = ''
    },
  },
})

export const { selectChannel, clearChannel } = channelSlice.actions
export default channelSlice.reducer
