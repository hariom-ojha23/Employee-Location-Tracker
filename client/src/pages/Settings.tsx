import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProfileSettings from "../components/ProfileSettings";
import PasswordSettings from "../components/PasswordSettings";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Settings: React.FC = (): JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Profile"
            {...a11yProps(0)}
            sx={{ fontSize: 13, fontWeight: "700", letterSpacing: "0.5px" }}
          />
          <Tab
            label="Password"
            {...a11yProps(1)}
            sx={{ fontSize: 13, fontWeight: "700", letterSpacing: "0.5px" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PasswordSettings />
      </TabPanel>
    </Box>
  );
};

export default Settings;
