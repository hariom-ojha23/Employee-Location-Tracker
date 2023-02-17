import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface GroupState {
  groups: Array<object>
}

const initialState = {
  groups: localStorage.getItem('groups') ? JSON.parse(localStorage.getItem('groups')!!) : []
}

export const groupSlice = createSlice({
  name: 'groups',
  initialState: initialState,
  reducers: {
    addNewGroup: (state, action) => {
      state.groups.push(action.payload as never)
      localStorage.setItem("groups", JSON.stringify(state.groups))
    },
    deleteGroup: (state) => {},
    updateGroup: (state) => {}
  }
})

export const {addNewGroup, deleteGroup, updateGroup} = groupSlice.actions
export default groupSlice.reducer