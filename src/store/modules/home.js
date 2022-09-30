import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    name: '爱彼迎'
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload
    }
  }
})

export default homeSlice.reducer

export const { changeName } = homeSlice.actions
