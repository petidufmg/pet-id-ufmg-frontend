import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import "../styles/css/customSelector.css";
import CustomSelectorStyles from "../styles/hooks/customSelectorStyles";

function CustomSelector() {
  const customSelectorClasses = CustomSelectorStyles();
  const [height, setHeight] = useState("Pequeno");

  function handleHeight(e) {
    setHeight(e.target.value);
  }

  return (
    <FormControl
      className={customSelectorClasses.formControl}
      variant="outlined"
    >
      <InputLabel id="demo-simple-select-outlined-label">Porte</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={height}
        onChange={handleHeight}
        label="Porte"
      >
        <MenuItem value={10}>Pequeno</MenuItem>
        <MenuItem value={20}>Médio</MenuItem>
        <MenuItem value={30}>Grande</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CustomSelector;
