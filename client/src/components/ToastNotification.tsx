import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import { ToastType } from "../types";

type Props = {
  handleClose: () => void;
  toast: ToastType;
};

const ToastNotification = (props: Props): JSX.Element => {
  const { toast } = props;
  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={4000}
      onClose={props.handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        variant="filled"
        onClose={props.handleClose}
        severity={toast.variant}
        sx={{ width: "100%", borderRadius: 2, minWidth: 250 }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default React.memo(ToastNotification);
