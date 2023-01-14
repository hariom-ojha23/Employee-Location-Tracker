import React, { useState, useCallback } from "react";
import { IconButton, Typography, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddEmployeeDialog from "../dialogs/AddEmployeeDialog";
import ToolbarSearchField from "../ToolbarSearchField";

type EmployeeProps = {
  title: string;
  toggleDrawer: () => void;
};

const EmployeeToolbar = (props: EmployeeProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDialog = useCallback(() => {
    setOpen(!open);
  }, [open]);

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
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            py: 1.3,
            px: 3,
            fontSize: "0.7rem",
            fontWeight: "700",
            background: "linear-gradient(#42424a, #191919)",
            borderRadius: 2,
          }}
          onClick={toggleDialog}
        >
          Add Employee
        </Button>
        <AddEmployeeDialog open={open} handleClose={toggleDialog} />
      </Stack>
    </React.Fragment>
  );
};

export default React.memo(EmployeeToolbar);
