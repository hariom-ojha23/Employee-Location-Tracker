import React from "react";
import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent";
import DashboardEmployeeList from "../components/DashboardEmployeeList";
import DashboardSearchField from "../components/DashboardSearchField";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Box
          className="dashboard-employee-list-container"
          sx={{ width: 350, height: "calc(100vh - 85px)", overflowY: "scroll" }}
        >
          <DashboardSearchField />
          <DashboardEmployeeList />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 85px)",
            borderRadius: 2,
            overflow: "hidden",
            border: "0.5px solid #e8e8e8",
          }}
        >
          <MapComponent height="calc(100vh - 85px)" />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Dashboard);
