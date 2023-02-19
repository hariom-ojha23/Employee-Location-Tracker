import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import MapComponent from "../components/MapComponent";
import HotspotTable from "../components/tables/HotspotTable";
import { ToastType } from "../types";
import { useQuery } from "@apollo/client";
import { GET_ALL_HOTSPOTS } from "../graphql/hotspots";
import ToastNotification from "../components/ToastNotification";
import HotspotMapComponent from "../components/maps/HotspotMapComponent";

const tableHead = ['Hotspot Name', 'Address', 'Groups', 'Created', 'Action']

const Hotspots: React.FC = (): JSX.Element => {
  const [toast, setToast] = useState<ToastType>({
    open: false,
    variant: "error",
    message: "",
  });

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!!) : null
  const {loading, error, data} = useQuery(GET_ALL_HOTSPOTS, {variables: {organization: userInfo.id}})

  const handleToastClose = useCallback(() => {
    return setToast({ ...toast, open: false });
  }, [toast]);

  useEffect(() => {
    error && setToast({...toast, message: error.message, open: true})
  }, [error])

  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        {(error || loading) && <HotspotTable rows={[]} tableHead={tableHead} />}
        {data && <HotspotTable tableHead={tableHead} rows={data.getAllHotspots} />}
      </Grid>
      <Grid item xs={12} lg={6} sx={{ width: "100%" }}>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {(error || loading) && <HotspotMapComponent data={[]} height="calc(100vh - 85px)" />}
          {data && <HotspotMapComponent data={data.getAllHotspots} height="calc(100vh - 85px)" />}
        </Box>
      </Grid>
    </Grid>
    <ToastNotification toast={toast} handleClose={handleToastClose}  />
    </>
  );
};

export default Hotspots;
