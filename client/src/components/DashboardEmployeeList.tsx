import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";

const DashboardEmployeeList: React.FC = (): JSX.Element => {
  return (
    <Box>
      <List dense={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (x: number) => (
            <ListItem
              onClick={() => console.log(x)}
              key={x}
              sx={{
                px: 1,
                py: 1.5,
                borderRadius: 1.5,
                mb: 0.5,
                backgroundColor: "white",
              }}
              className="dashboard-employee-list-item"
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ background: "linear-gradient(#49a3f1, #1A73E8)" }}
                >
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

export default React.memo(DashboardEmployeeList);
