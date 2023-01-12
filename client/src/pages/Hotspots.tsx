import React from "react";
import { Box, Grid } from "@mui/material";
import EnhancedTable from "../components/TableComponent";
import MapComponent from "../components/MapComponent";

const Hotspots: React.FC = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6}>
        <EnhancedTable />
      </Grid>
      <Grid item lg={6} sx={{ width: "100%" }}>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <MapComponent height="calc(100vh - 85px)" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hotspots;
