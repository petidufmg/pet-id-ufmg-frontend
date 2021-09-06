import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import "../styles/css/customSelector.css";
import CustomSelectorStyles from "../styles/hooks/customSelectorStyles";

function CustomSelector(props) {
  const customSelectorClasses = CustomSelectorStyles();

  function handleHeight(e) {
    props.setState((prev) => ({
      ...prev,
      height: e.target.value,
    }));
  }

  return (
    <FormControl
      required
      className={customSelectorClasses.formControl}
      variant="outlined"
    >
      <InputLabel id="demo-simple-select-outlined-label">Porte</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        key={props.state.height}
        value={props.state.height}
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
