import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/css/customSelector.css";
import CustomSelectorStyles from "../styles/hooks/customSelectorStyles";

function CustomSelector(props) {
  const location = useLocation();
  const state = location.state || { height: "Pequeno" };
  const customSelectorClasses = CustomSelectorStyles();
  const [height, setHeight] = useState(state.height);

  function handleHeight(e) {
    setHeight(e.target.value);
    props.setState((prev) => ({
      ...prev,
      height: e.target.value,
    }));
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
        <MenuItem value={"Pequeno"}>Pequeno</MenuItem>
        <MenuItem value={"Médio"}>Médio</MenuItem>
        <MenuItem value={"Grande"}>Grande</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CustomSelector;
