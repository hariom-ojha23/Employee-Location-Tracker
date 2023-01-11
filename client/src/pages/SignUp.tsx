import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Box, OutlinedInput, Avatar, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AuthPagesContainer from "../components/AuthPagesContainer";
import Typography from "@mui/material/Typography";
import { ToastType } from "../types";
import ToastNotification from "../components/ToastNotification";

import { useMutation } from "@apollo/client";
import { REGISTER_ORG } from "../graphql/organization";

const SignUp = () => {
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [toast, setToast] = useState<ToastType>({
    open: false,
    variant: "success",
    message: "",
  });

  const theme = useTheme();
  const navigate = useNavigate();

  const [registerOrganization, { error, data }] = useMutation(REGISTER_ORG);

  useEffect(() => {
    if (error) {
      setToast({ open: true, variant: "error", message: error.message });
    }
    if (data) {
      const { userInfo, accessToken, refreshToken } = data.loginOrganization;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      navigate("/app/dashboard");
    }
  }, [data, error]);

  const handleToastClose = useCallback(() => {
    return setToast({ ...toast, open: false });
  }, [toast]);

  const isEmailValid = (email: string) => {
    const regex =
      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

    return email.match(regex);
  };

  const onSubmit = async () => {
    if (fullname.length === 0) {
      setToast({
        variant: "error",
        message: "Full name is a required field",
        open: true,
      });
    } else if (!isEmailValid(email)) {
      setToast({
        variant: "error",
        message: "Invalid Email Address",
        open: true,
      });
    } else if (password.length < 6) {
      setToast({
        variant: "error",
        message: "Password must be atleast 6 characters",
        open: true,
      });
    } else if (password !== confirmPassword) {
      setToast({
        variant: "error",
        message: "Password and confirm password do not match",
        open: true,
      });
    } else {
      registerOrganization({
        variables: { fullname, email, password },
      });
    }
  };

  return (
    <Box>
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
              className="form-input"
            />
            <OutlinedInput
              fullWidth
              sx={{ mt: 2 }}
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            <OutlinedInput
              fullWidth
              sx={{ mt: 2 }}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
            <OutlinedInput
              fullWidth
              sx={{ mt: 2 }}
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
            />
            <Button
              onClick={onSubmit}
              fullWidth
              variant="contained"
              sx={{ my: 3, py: 1.5 }}
            >
              Sign Up
            </Button>
            <Box sx={{ mt: 1.5 }}>
              <Link style={{ fontSize: 14 }} to="/auth/signin">
                Already have an account? Sign In
              </Link>
            </Box>
          </Paper>
        </Box>
      </AuthPagesContainer>
      <ToastNotification toast={toast} handleClose={handleToastClose} />
    </Box>
  );
};

export default SignUp;
