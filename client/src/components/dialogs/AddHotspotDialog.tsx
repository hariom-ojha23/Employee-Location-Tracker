import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import SelectInput from "../SelectInput";

const MapComponent = React.lazy(() => import("../MapComponent"));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  handleClose: () => void;
};

const AddHotspotDialog = (props: Props) => {
  return (
    <Dialog
      // TransitionComponent={Transition}
      fullWidth
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle sx={{ fontSize: 16 }}>Add New Hotspot</DialogTitle>
      <Divider />
      <DialogContent sx={{ pb: 1 }} className="dialog-content">
        <OutlinedInput
          fullWidth
          placeholder="Hotspot Name"
          type="text"
          className="form-input"
          sx={{ mb: 2 }}
        />
        <SelectInput placeholder="Select Groups" />
        <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
          <MapComponent height="300px" />
        </Box>
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

export default AddHotspotDialog;
