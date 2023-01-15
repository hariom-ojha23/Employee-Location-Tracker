import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import WifiIcon from "@mui/icons-material/WifiTetheringOutlined";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAltOutlined";
import AdminPanelIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import AssessmentIcon from "@mui/icons-material/AssessmentOutlined";
import { Link } from "react-router-dom";

import DashboardToolbar from "../toolbars/DashboardToolbar";
import HotspotToolbar from "../toolbars/HotspotToolbar";
import EmployeeToolbar from "../toolbars/EmployeeToolbar";
import GroupToolbar from "../toolbars/GroupToolbar";
import AdminToolbar from "../toolbars/AdminToolbar";
import ReportToolbar from "../toolbars/ReportToolbar";
import SettingToolbar from "../toolbars/SettingToolbar";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: "none",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "transparent",
  boxShadow: "none",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: 64,
    width: `calc(100% - ${64}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const drawerLink = [
  "/app/dashboard",
  "/app/hotspots",
  "/app/employees",
  "/app/groups",
  "/app/admins",
  "/app/reports",
  "/app/settings",
];

const drawerMenu = [
  "Dashboard",
  "Hotspots",
  "Employees",
  "Groups",
  "Admins",
  "Reports",
  "Settings",
];

const drawerIconOne = [
  <DashboardIcon />,
  <WifiIcon />,
  <PersonIcon />,
  <PeopleAltIcon />,
  <AdminPanelIcon />,
  <AssessmentIcon />,
  <SettingsIcon />,
];

const DashboardLayout: React.FC = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = React.useState<number>(0);

  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    setSelectedMenu(drawerLink.findIndex((x) => x === path));
  }, [location]);

  const toggleDrawer = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          className="toolbar"
          sx={{
            background: "transparent",
            borderRadius: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 0,
          }}
        >
          {selectedMenu === 0 && (
            <DashboardToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
          {selectedMenu === 1 && (
            <HotspotToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
          {selectedMenu === 2 && (
            <EmployeeToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
          {selectedMenu === 3 && (
            <GroupToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
          {selectedMenu === 4 && (
            <AdminToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
          {selectedMenu === 5 && (
            <ReportToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
          {selectedMenu === 6 && (
            <SettingToolbar
              title={drawerMenu[selectedMenu]}
              toggleDrawer={toggleDrawer}
            />
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box
          className="drawer"
          sx={{
            ml: 1,
            my: 1,
            p: 1,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{ my: 2 }}
            fontWeight="600"
            textAlign="center"
            variant="subtitle1"
            component="div"
          >
            {open ? "GPS Report" : "GR"}
          </Typography>
          <Divider sx={{ mb: 1, backgroundColor: "#e8e8e8" }} />
          <List>
            {drawerMenu.map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  borderRadius: 2,
                  background:
                    selectedMenu === index
                      ? "linear-gradient(#49a3f1 0%, #1A73E8  100%)"
                      : "inherit",
                  color: "white",
                  overflow: "hidden",
                }}
              >
                <Link
                  to={drawerLink[index]}
                  onClick={() => setSelectedMenu(index)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      {drawerIconOne[index]}
                    </ListItemIcon>
                    <Typography
                      sx={{
                        display: open ? "block" : "none",
                        color: "white",
                        fontSize: 14,
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ height: "50px" }}></Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
