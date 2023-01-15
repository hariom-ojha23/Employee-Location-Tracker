import React from "react";
import {
  Box,
  Grid,
  Paper,
  OutlinedInput,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import CountryCodeSelect from "./CountryCodeSelect";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const boxShadow =
  "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem";

const ProfileSettings = () => {
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          p: 5,
          borderRadius: 3,
          width: { xs: "100%", md: "80%", lg: "60%" },
          boxShadow: boxShadow,
        }}
      >
        <Grid container spacing={4}>
          <Grid className="flex-column align-center" item xs={12} sm={4}>
            <img
              className="profile-photo"
              src="https://th.bing.com/th/id/OIP.9B2RxsHDB_s7FZT0mljnhQHaHa?pid=ImgDet&rs=1"
              alt="profile photo"
            />
            <Box sx={{ alignSelf: "center", mt: 2 }}>
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <OutlinedInput
              fullWidth
              placeholder="Full Name"
              type="text"
              sx={{ mb: 2 }}
            />
            <OutlinedInput
              fullWidth
              placeholder="Email Address"
              type="email"
              sx={{ mb: 2 }}
            />
            <Stack direction="row" gap={2} sx={{ mb: 2 }}>
              <CountryCodeSelect />
              <OutlinedInput fullWidth placeholder="Phone Number" type="tel" />
            </Stack>
            <OutlinedInput
              fullWidth
              placeholder="Organization Name"
              type="text"
              sx={{ mb: 3 }}
            />
            <Button
              sx={{
                py: 1.3,
                px: 3,
                fontSize: "0.75rem",
                fontWeight: "700",
                background: "linear-gradient(#49a3f1, #1A73E8)",
                borderRadius: 2,
              }}
              variant="contained"
            >
              Save Details
            </Button>
            <Button
              startIcon={<LogoutIcon />}
              sx={{
                py: 1.3,
                px: 3,
                fontSize: "0.75rem",
                fontWeight: "700",
                borderRadius: 2,
                ml: 2,
              }}
              variant="outlined"
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default React.memo(ProfileSettings);
