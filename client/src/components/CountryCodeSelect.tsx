import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../utils/countryList";

function CountryCodeSelect() {
  return (
    <Autocomplete
      sx={{ width: "45%", overflowX: "visible" }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => `+${option.phone}`}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 }, fontSize: 14 }}
          {...props}
          key={option.code}
        >
          <img
            loading="lazy"
            width="18"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="+91"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          className="form-input"
        />
      )}
    />
  );
}

export default React.memo(CountryCodeSelect);
