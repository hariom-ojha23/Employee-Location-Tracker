import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Stack, Typography } from "@mui/material";
import TimePicker from "../TimePicker";

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

type ScheduleProps = {
  startTime: Date | null;
  endTime: Date | null;
};

const AddGroupDialog = (props: Props) => {
  const [schedule, setSchedule] = useState<ScheduleProps>({
    startTime: null,
    endTime: null,
  });

  console.log(schedule);

  const setStartTime = useCallback(
    (newVal: Date | null) => {
      setSchedule({ ...schedule, startTime: newVal });
    },
    [schedule]
  );

  const setEndTime = useCallback(
    (newVal: Date | null) => {
      setSchedule({ ...schedule, endTime: newVal });
    },
    [schedule]
  );

  return (
    <Dialog
      // TransitionComponent={Transition}
      fullWidth
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle sx={{ fontSize: 16 }}>Add New Group</DialogTitle>
      <Divider />
      <DialogContent sx={{ pb: 1 }} className="dialog-content">
        <OutlinedInput
          fullWidth
          placeholder="Group Name"
          type="text"
          className="form-input"
          sx={{ mb: 3 }}
        />
        <Typography sx={{ fontSize: 14, mb: 1, color: "gray" }}>
          Schedule Tracking
        </Typography>
        <Stack direction="row" gap={2}>
          <TimePicker
            time={schedule!.startTime}
            setTime={setStartTime}
            placeholder="Start Time"
          />
          <TimePicker
            time={schedule!.endTime}
            setTime={setEndTime}
            placeholder="End Time"
          />
        </Stack>
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

export default AddGroupDialog;
