import React from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import WifiIcon from "@mui/icons-material/WifiTetheringOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAltOutlined";
import ReportHeaderCard from "../components/ReportHeaderCard";
import AdminPanelIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ReportTable from "../components/ReportTable";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Reports: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ pt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <ReportHeaderCard
            title="Total Hotspots"
            count={23}
            bg="linear-gradient(#49a3f1, #1A73E8)"
          >
            <WifiIcon fontSize="medium" />
          </ReportHeaderCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ReportHeaderCard
            title="Total Employees"
            count={14}
            bg="linear-gradient(#42424a, #191919)"
          >
            <PersonIcon />
          </ReportHeaderCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ReportHeaderCard
            title="Total Groups"
            count={18}
            bg="linear-gradient(#66BB6A, #43A047)"
          >
            <PeopleAltIcon />
          </ReportHeaderCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ReportHeaderCard
            title="Total Admins"
            count={18}
            bg="linear-gradient(#EC407A, #D81B60)"
          >
            <AdminPanelIcon />
          </ReportHeaderCard>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <Box sx={{ mb: 3, display: "flex", flexDirection: "row-reverse" }}>
          <Button
            variant="contained"
            sx={{
              py: 1.3,
              px: 3,
              fontSize: "0.7rem",
              fontWeight: "700",
              background: "linear-gradient(#42424a, #191919)",
              borderRadius: 2,
            }}
          >
            Export Report
          </Button>
          <IconButton
            sx={{
              mr: 2,
              background: "linear-gradient(#42424a, #191919)",
              color: "white",
            }}
          >
            <FilterAltOutlinedIcon />
          </IconButton>
        </Box>
        <ReportTable />
      </Box>
    </Box>
  );
};

export default Reports;
