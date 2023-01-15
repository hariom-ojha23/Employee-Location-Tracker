import React from "react";
import { Box, Paper, OutlinedInput, Button } from "@mui/material";

const boxShadow =
  "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem";

const PasswordSettings = () => {
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
        <OutlinedInput
          fullWidth
          placeholder="Current Password"
          type="password"
          sx={{ mb: 2 }}
        />
        <OutlinedInput
          fullWidth
          placeholder="New Password"
          type="password"
          sx={{ mb: 2 }}
        />
        <OutlinedInput
          fullWidth
          placeholder="Confirm New Password"
          type="password"
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
          Save Password
        </Button>
      </Paper>
    </Box>
  );
};

export default React.memo(PasswordSettings);
