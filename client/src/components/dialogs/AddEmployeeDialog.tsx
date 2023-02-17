import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import MultipleSelectInput from "../MultipleSelectInput";
import CountryCodeSelect from "../CountryCodeSelect";
import { Stack } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const AddEmployeeDialog = (props: Props) => {
  return (
    <Dialog
      fullWidth
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle sx={{ fontSize: 16 }}>Add New Employee</DialogTitle>
      <Divider />
      <DialogContent sx={{ pb: 1 }} className="dialog-content">
        <OutlinedInput
          fullWidth
          placeholder="Full Name"
          type="text"
          className="form-input"
          sx={{ mb: 2 }}
        />
        <OutlinedInput
          fullWidth
          placeholder="Email Address"
          type="email"
          className="form-input"
          sx={{ mb: 2 }}
        />
        <Stack direction="row" gap={2} sx={{ mb: 2 }}>
          <CountryCodeSelect />
          <OutlinedInput
            fullWidth
            placeholder="Phone Number"
            type="tel"
            className="form-input"
          />
        </Stack>
        <MultipleSelectInput placeholder="Select Groups" />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 1.5 }}>
        <Button
          sx={{ fontSize: "0.7rem", borderRadius: 1.5, px: 3, py: 1.2 }}
          variant="outlined"
          onClick={props.handleClose}
        >
          Cancel
        </Button>
        <Button
          sx={{ fontSize: "0.7rem", borderRadius: 1.5, px: 3, py: 1.2 }}
          variant="contained"
          onClick={props.handleClose}
          className="blue-btn"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(AddEmployeeDialog);
