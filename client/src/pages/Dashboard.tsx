import React from "react";
import { Box } from "@mui/material";
import MapComponent from "../components/MapComponent";
import DashboardEmployeeList from "../components/DashboardEmployeeList";

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
          className="dashboard-employee-list"
          sx={{ width: 350, height: "calc(100vh - 98px)", overflowY: "scroll" }}
        >
          <DashboardEmployeeList />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 98px)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <MapComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
