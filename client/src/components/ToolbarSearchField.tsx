import React from "react";
import { OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholder: string;
};

const ToolbarSearchField = (props: Props) => {
  return (
    <OutlinedInput
      startAdornment={<SearchIcon sx={{ ml: 1, color: "#a9a9a9" }} />}
      placeholder={props.placeholder}
      sx={{ mr: 2, width: 200 }}
    />
  );
};

export default React.memo(ToolbarSearchField);
