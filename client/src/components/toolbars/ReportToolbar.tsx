import React from "react";
import { IconButton, Typography, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type ReportProps = {
  title: string;
  toggleDrawer: () => void;
};

const ReportToolbar = (props: ReportProps) => {
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.toggleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="subtitle1" noWrap component="div">
          {props.title}
        </Typography>
      </Stack>
    </React.Fragment>
  );
};

export default React.memo(ReportToolbar);
