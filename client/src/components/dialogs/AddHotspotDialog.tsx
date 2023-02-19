import React, { useCallback, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import MultipleSelectInput from "../MultipleSelectInput";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_GROUPS } from "../../graphql/groups";
import { GroupType, LocationType, ToastType } from "../../types";
import { MapLayerMouseEvent } from "react-map-gl";
import FormMapComponent from "../maps/FormMapComponent";
import ToastNotification from "../ToastNotification";
import { ADD_HOTSPOT, GET_ALL_HOTSPOTS } from "../../graphql/hotspots";

type Props = {
  open: boolean;
  handleClose: () => void;
  showSuccessToast: (message: string) => void
};

const AddHotspotDialog = (props: Props) => {

  const [hotspotname, setHotspotName] = useState('')
  const [groups, setGroups] = useState<Array<any>>([])
  const [location, setLocation] = useState<LocationType>({latitude: 0, longitude: 0, address: ''})
  const [toast, setToast] = useState<ToastType>({open: false, variant: "success", message: ""});

  const [addHotspot, addHotspotData] = useMutation(ADD_HOTSPOT)

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!!) : null
  const {loading, error, data} = useQuery(GET_ALL_GROUPS, {variables: {organization: userInfo.id}})

  useEffect(() => {
    if (addHotspotData.error) {
      setToast({ open: true, variant: "error", message: addHotspotData.error.message });
    }
    if (addHotspotData.data) {
      const {successful, message} = addHotspotData.data.addHotspot
      if (successful) {
        props.showSuccessToast(message)
        setHotspotName('')
        setLocation({latitude: 0, longitude: 0, address: ''})
        setGroups([])
        props.handleClose()
      }
    }
  }, [addHotspotData.error, addHotspotData.data]);

  const setGroupsCallback = useCallback((val: GroupType) => {
    let exist = groups.findIndex((item) => item.id === val.id)
    const list = groups
    const obj = {
      id: val.id,
      groupname: val.groupname,
      organization: val.organization,
      schedule: {
        starttime: val.schedule.starttime,
        endtime: val.schedule.endtime
      }
    }
    if (exist === -1) {
      list.push(obj)
      setGroups([...list])
    } else {
      list.splice(exist, 1)
      setGroups([...list])
    }
  }, [])

  const handleToastClose = useCallback(() => {
    return setToast({ ...toast, open: false });
  }, [toast]);

  const setLocationCallback = useCallback((val: MapLayerMouseEvent) => {
    const obj: LocationType = {
      latitude: Number(val.lngLat.lat.toPrecision(6)),
      longitude: Number(val.lngLat.lng.toPrecision(6)),
      address: ''
    }

    setLocation(obj)
  }, [])

  function saveHotspot() {
    if (hotspotname.length < 4) {
      setToast({open: true, variant: 'error', message: 'Hotspot name must have atleast 4 characters'})
    } else if (location.latitude === 0 || location.longitude === 0) {
      setToast({open: true, variant: 'error', message: 'Please select a location to set hotspot'})
    } else {
      addHotspot({
        variables: {hotspotname, organization: userInfo.id, location, groups},
        refetchQueries: [{query: GET_ALL_HOTSPOTS, variables: {organization: userInfo.id}}]
      })
    }
  }
  
  return (
    <Dialog
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
          value={hotspotname}
          onChange={(e) => setHotspotName(e.target.value)}
        />
        {
          (loading || error) ? <MultipleSelectInput placeholder="Select Groups" data={[]} setGroups={setGroupsCallback} /> 
          : <MultipleSelectInput placeholder="Select Groups" data={data.getAllGroups} setGroups={setGroupsCallback} /> 
        }
        <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
          <FormMapComponent height="300px" setLocation={setLocationCallback} />
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
          onClick={saveHotspot}
          className="blue-btn"
        >
          Save
        </Button>
      </DialogActions>
      <ToastNotification toast={toast} handleClose={handleToastClose} />
    </Dialog>
  );
};

export default AddHotspotDialog;
