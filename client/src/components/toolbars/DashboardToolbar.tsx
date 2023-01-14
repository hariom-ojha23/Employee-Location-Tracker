import React from "react";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import ToolbarSearchField from "../ToolbarSearchField";

type DashboardProps = {
  title: string;
  toggleDrawer: () => void;
};

const DashboardToolbar = (props: DashboardProps) => {
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
      <Stack direction="row" alignItems="center">
        <ToolbarSearchField placeholder="Search Employee" />
      </Stack>
    </React.Fragment>
  );
};

export default React.memo(DashboardToolbar);
