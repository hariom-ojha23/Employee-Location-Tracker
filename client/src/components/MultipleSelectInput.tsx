import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { GroupType } from "../types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontSize: "14px",
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type Props = {
  placeholder: string;
  data: Array<GroupType>
  setGroups: (val: GroupType) => void
};

export default function MultipleSelectInput(props: Props) {
  const theme = useTheme();
  const [groupName, setGroupName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof groupName>) => {
    const {
      target: { value },
    } = event;
    setGroupName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <Select
        fullWidth
        multiple
        displayEmpty
        value={groupName}
        onChange={handleChange}
        sx={{ mb: 2 }}
        className="form-select"
        input={<OutlinedInput fullWidth className="form-input" />}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <span style={{ color: "#b1b1b1" }}>{props.placeholder}</span>
            );
          }

          return selected.join(", ");
        }}
      >
        {props.data.map((group: GroupType) => (
          <MenuItem
            key={group.id}
            value={group.groupname}
            style={getStyles(group.groupname, groupName, theme)}
            onClick={() => props.setGroups(group)}
          >
            {group.groupname}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
