import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Box, OutlinedInput, Avatar, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AuthPagesContainer from "../components/AuthPagesContainer";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

const SignUp = () => {
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const theme = useTheme();

  return (
    <AuthPagesContainer>
      <Box>
        <Paper
          className="auth-card"
          sx={{
            px: 2,
            py: 3,
            borderRadius: 2,
            [theme.breakpoints.up(1100)]: {
              width: "300px",
              p: 6,
            },
            [theme.breakpoints.down(1100)]: {
              width: "300px",
              p: 6,
            },
            [theme.breakpoints.down(600)]: {
              width: "300px",
              p: 3,
              py: 4,
            },
          }}
          elevation={5}
        >
          <Avatar sizes="20" sx={{ backgroundColor: "#007bff" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            variant="h5"
            component="h3"
            sx={{ mt: 1, mb: 4, fontSize: 25 }}
          >
            Sign Up
          </Typography>

          <OutlinedInput
            fullWidth
            placeholder="Full Name"
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <OutlinedInput
            fullWidth
            sx={{ mt: 2 }}
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <OutlinedInput
            fullWidth
            sx={{ mt: 2 }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <OutlinedInput
            fullWidth
            sx={{ mt: 2 }}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button fullWidth variant="contained" sx={{ my: 3, py: 1.5 }}>
            Sign Up
          </Button>
          <Box sx={{ mt: 2 }}>
            <Link to="/auth/signin">Already have an account? Sign In</Link>
          </Box>
        </Paper>
      </Box>
    </AuthPagesContainer>
  );
};

export default SignUp;
