import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function CustomRadio(props) {
  const location = useLocation();
  const radioState = location.state || { radio: "male" };
  const [value, setValue] = useState(radioState.radio || "male");

  function handleChange(e) {
    setValue(e.target.value);
    props.setState((prev) => ({
      ...prev,
      radio: e.target.value,
    }));
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sexo</FormLabel>
      <RadioGroup
        aria-label="sexo"
        name="sexo"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="male" control={<Radio />} label="Macho" />
        <FormControlLabel value="female" control={<Radio />} label="Fêmea" />
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadio;
