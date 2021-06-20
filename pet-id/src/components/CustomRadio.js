import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";

function CustomRadio() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value)
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
