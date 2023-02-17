import React, { useState, useCallback } from "react";
import { IconButton, Typography, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ToolbarSearchField from "../ToolbarSearchField";
import AddGroupDialog from "../dialogs/AddGroupDialog";
import ToastNotification from "../ToastNotification";
import { ToastType } from "../../types";

type GroupProps = {
  title: string;
  toggleDrawer: () => void;
};

const GroupToolbar = (props: GroupProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastType>({
    open: false,
    variant: "success",
    message: "",
  });

  const toggleDialog = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleToastClose = useCallback(() => {
    return setToast({ ...toast, open: false });
  }, [toast]);

  const showSuccessToast = useCallback(
    (message: string) => {
      return setToast({...toast, message, open: true})
    },
    [toast]
  )

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
        <ToolbarSearchField placeholder="Search Group" />
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
          Add Group
        </Button>
        <AddGroupDialog open={open} handleClose={toggleDialog} showSuccessToast={showSuccessToast} />
      </Stack>
      <ToastNotification toast={toast} handleClose={handleToastClose} />
    </React.Fragment>
  );
};

export default React.memo(GroupToolbar);
