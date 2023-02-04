import {configureStore} from '@reduxjs/toolkit'
import groupReducer from './GroupSlice'

export const store = configureStore({
  reducer: {
    groups: groupReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch