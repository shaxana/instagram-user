import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  posts: object[];
  isLogin: boolean
}

const initialState: UserState = {
  posts: [],
  isLogin: true
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   
    login: (state,action) => {
      state.isLogin = action.payload
    },
    // extraReducer:(){

    // }
  },
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export default userSlice.reducer