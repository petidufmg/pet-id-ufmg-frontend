import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

function CustomRadio(props) {

  function handleChange(e) {
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
        key={props.state.radio}
        value={props.state.radio}
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
