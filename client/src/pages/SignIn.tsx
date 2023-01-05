import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Box, OutlinedInput, Avatar, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AuthPagesContainer from "../components/AuthPagesContainer";
import Typography from "@mui/material/Typography";

const SignIn: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
              width: "330px",
              p: 2,
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
            Sign In
          </Typography>
          <OutlinedInput
            fullWidth
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
          <Button fullWidth variant="contained" sx={{ my: 3, py: 1.3 }}>
            Sign In
          </Button>
          <Box sx={{ mt: 2 }}>
            <Link to="/auth/signup">Don't have an account? Sign Up</Link>
          </Box>
        </Paper>
      </Box>
    </AuthPagesContainer>
  );
};

export default SignIn;
