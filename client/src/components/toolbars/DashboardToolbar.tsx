import React from "react";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

type DashboardProps = {
  title: string;
  toggleDrawer: () => void;
};

const DashboardToolbar = (props: DashboardProps) => {
  return (
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
  );
};

export default React.memo(DashboardToolbar);
