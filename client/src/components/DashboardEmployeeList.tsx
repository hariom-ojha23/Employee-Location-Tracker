import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";

const DashboardEmployeeList = () => {
  return (
    <Box>
      <List dense={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (x: number) => (
            <ListItem
              key={x}
              sx={{
                px: 1,
                py: 1.5,
                border: "1px solid #e8e8e8",
                borderLeft: "4px solid red",
                borderRadius: 1,
                mb: 0.5,
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};

export default DashboardEmployeeList;
