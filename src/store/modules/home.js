import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { homeRequest } from '@/service'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async () => {
  const res = await homeRequest.getGoodPriceInfo()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    isScrollTop: true
  },
  reducers: {
    changeGoodPriceInfoAction(state, action) {
      state.goodPriceInfo = action.payload
    },
    setIsScrollTop(state, { payload }) {
      state.isScrollTop = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export default homeSlice.reducer

export const { changeGoodPriceInfoAction, setIsScrollTop } = homeSlice.actions
