import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as Timepicker } from "@mui/x-date-pickers/TimePicker";

type Props = {
  time: Date | null;
  setTime: (newValue: Date | null) => void;
  placeholder: string;
};

const TimePicker = (props: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Timepicker
        value={props.time}
        onChange={(newValue) => {
          props.setTime(newValue);
        }}
        renderInput={(params) => {
          //params.placeholder = props.placeholder;
          console.log(params);
          return (
            <TextField fullWidth {...params} placeholder={props.placeholder} />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default React.memo(TimePicker);
