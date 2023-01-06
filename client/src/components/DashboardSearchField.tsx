import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment, AutocompleteRenderInputParams } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DashboardSearchField: React.FC = (): JSX.Element => {
  const userArr = [
    { id: 1, name: "Hari om Ojha" },
    { id: 2, name: "Aditya Gupta" },
    { id: 3, name: "Akash Sharma" },
  ];

  const renderInput = (params: AutocompleteRenderInputParams) => {
    params.InputProps.startAdornment = (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    );
    return <TextField {...params} placeholder="Search Employee" />;
  };

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      sx={{ mt: 0.5 }}
      options={[].map((option) => option)}
      renderInput={renderInput}
    />
  );
};

export default DashboardSearchField;
