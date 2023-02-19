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

export type LocationType = {
  latitude: number
  longitude: number
  address: string
}

export type HotspotType = {
  id: string
  hotspotname: string
  organization: string
  location: LocationType
  groups: Array<GroupType>
  created: Date
  updated: Date
}