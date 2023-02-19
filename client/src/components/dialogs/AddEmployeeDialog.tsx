import React, {useState, useCallback} from "react";
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
import { GroupType } from "../../types";
import { useQuery } from "@apollo/client";
import { GET_ALL_GROUPS } from "../../graphql/groups";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const AddEmployeeDialog = (props: Props) => {
  const [groups, setGroups] = useState<Array<GroupType>>([])

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!!) : null
  const {loading, error, data} = useQuery(GET_ALL_GROUPS, {variables: {organization: userInfo.id}})

  const setGroupsCallback = useCallback((val: GroupType) => {
    let exist = groups.findIndex((item) => item.id === val.id)
    const list = groups

    if (exist === -1) {
      list.push(val)
      setGroups([...list])
    } else {
      list.splice(exist, 1)
      setGroups([...list])
    }
  }, [])

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
        {
          (loading || error) ? <MultipleSelectInput placeholder="Select Groups" data={[]} setGroups={setGroupsCallback} /> 
          : <MultipleSelectInput placeholder="Select Groups" data={data.getAllGroups} setGroups={setGroupsCallback} /> 
        }      </DialogContent>
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
