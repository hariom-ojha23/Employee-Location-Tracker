import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface GroupState {
  groups: Array<object>
}

const initialState = {
  groups: []
}

export const groupSlice = createSlice({
  name: 'groups',
  initialState: initialState,
  reducers: {
    addGroup: (state) => {},
    deleteGroup: (state) => {},
    updateGroup: (state) => {}
  }
})

export const {addGroup, deleteGroup, updateGroup} = groupSlice.actions
export default groupSlice.reducer