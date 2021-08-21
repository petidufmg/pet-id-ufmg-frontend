import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function CustomTextField(props) {
  const location = useLocation();
  const state = location.state || { textField: {} };
  const [value, setValue] = useState(state.textField[props.index] || "");

  function handleChange(e) {
    setValue(e.target.value);
    props.setState((prev) => ({
      ...prev,
      textField: {
        ...prev.textField,
        [props.index]: e.target.value,
      },
    }));
  }
  return (
    <TextField
      value={value}
      onChange={handleChange}
      variant="outlined"
      type={
        props.attrLabel === ("Número do microchip" || "Idade")
          ? "number"
          : "text"
      }
      label={props.attrLabel}
    />
  );
}

export default CustomTextField;
