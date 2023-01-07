import { AlertColor } from "@mui/material"

export type ToastType = {
  open: boolean
  variant: AlertColor
  message: string
}