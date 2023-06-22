import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type TProp = {
  title: string;
  value: string;
  setValue: (value: string) => void;
  options: any;
};
const SelectInput: React.FC<TProp> = ({ value, setValue, title, options }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="f1-select-label">{title}</InputLabel>
        <Select
          labelId="f1-select-label"
          id="f1-select"
          value={value}
          label={title}
          onChange={handleChange}
        >
          {options.map((opt: any, index: number) => (
            <MenuItem key={index} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default SelectInput;
