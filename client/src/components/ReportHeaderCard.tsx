import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

type Props = {
  children: JSX.Element;
  title: string;
  count: number;
  bg: string;
};

const ReportHeaderCard = ({ children, title, count, bg }: Props) => {
  return (
    <Paper
      sx={{
        borderRadius: 2,
        p: 2,
        boxShadow:
          "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
      }}
    >
      <Box className="report-header-card">
        <Box sx={{ position: "relative" }}>
          <Box
            className="report-header-card-icon"
            sx={{
              background: bg,
              borderRadius: 2,
              boxShadow:
                "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
            }}
          >
            {children}
          </Box>
        </Box>
        <Box>
          <Typography
            textAlign="left"
            sx={{
              fontSize: "0.875rem",
              letterSpacing: "0.02857em",
              color: "rgb(123, 128, 154)",
              fontWeight: "300",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="h4"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "600",
              color: "rgb(52, 71, 103)",
              textAlign: "right",
              letterSpacing: "0.00735em",
            }}
          >
            {count}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default React.memo(ReportHeaderCard);
