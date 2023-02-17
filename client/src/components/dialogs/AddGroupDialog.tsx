import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Typography } from "@mui/material";
import TimePicker from "../TimePicker";
import ToastNotification from "../ToastNotification";
import { ToastType } from "../../types";
import { useMutation } from "@apollo/client";
import { ADD_GROUP, GET_ALL_GROUPS } from "../../graphql/groups";
import { addNewGroup } from "../../store/GroupSlice";
import { useDispatch } from "react-redux";

type Props = {
  open: boolean;
  handleClose: () => void;
  showSuccessToast: (message: string) => void;
};

type ScheduleProps = {
  starttime: Date | null;
  endtime: Date | null;
};

const AddGroupDialog = (props: Props) => {
  const [schedule, setSchedule] = useState<ScheduleProps>({
    starttime: null,
    endtime: null,
  });
  const [groupname, setGroupname] = useState<string>("");
  const [toast, setToast] = useState<ToastType>({
    open: false,
    variant: "success",
    message: "",
  });

  const [addGroup, {error, data}] = useMutation(ADD_GROUP)
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!!) : null

  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      setToast({ open: true, variant: "error", message: error.message });
    }
    if (data) {
      const {successful, message, res} = data.addGroup
      if (successful) {
        props.showSuccessToast(message)
        dispatch(addNewGroup(res))
        setGroupname('')
        setSchedule({starttime: null, endtime: null})
        props.handleClose()
      }
    }
  }, [data, error]);

  const setStartTime = useCallback(
    (newVal: Date | null) => {
      setSchedule({ ...schedule, starttime: newVal });
    },
    [schedule]
  );

  const setEndTime = useCallback(
    (newVal: Date | null) => {
      setSchedule({ ...schedule, endtime: newVal });
    },
    [schedule]
  );

  const handleToastClose = useCallback(() => {
    return setToast({ ...toast, open: false });
  }, [toast]);

  function saveGroup() {
    if (groupname.length < 4) {
      setToast({open: true, variant: 'error', message: 'Group name must have atleast 4 characters'})
    } else if (schedule.starttime == null || schedule.endtime == null) {
      setToast({open: true, variant: 'error', message: 'Please add a schedule time for tracking'})
    } else {
      addGroup({
        variables: {groupname, organization: userInfo.id, schedule},
        refetchQueries: [{query: GET_ALL_GROUPS, variables: {organization: userInfo.id}}]
      })
    }
  }

  return (
      <Dialog
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
            value={groupname}
            onChange={(e) => setGroupname(e.target.value)}
          />
          <Typography sx={{ fontSize: 14, mb: 1, color: "gray" }}>
            Schedule Tracking
          </Typography>
          <Stack direction="row" gap={2}>
            <TimePicker
              time={schedule!.starttime}
              setTime={setStartTime}
              placeholder="Start Time"
            />
            <TimePicker
              time={schedule!.endtime}
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
            onClick={saveGroup}
            className="blue-btn"
          >
            save
          </Button>
        </DialogActions>
        <ToastNotification toast={toast} handleClose={handleToastClose} />
      </Dialog>
  );
};

export default React.memo(AddGroupDialog);
