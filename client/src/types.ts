import { AlertColor } from "@mui/material"

export type ToastType = {
  open: boolean
  variant: AlertColor
  message: string
}

export type GroupType = {
  id: string
  groupname: string
  organization: string
  schedule: {
    starttime: Date
    endtime: Date
  }
  created: Date
  updated: Date
}