import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

function CustomTextField(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.state.textField[props.index]);
  }, [props.state.textField[props.index]]);

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
      required
      onChange={handleChange}
      variant="outlined"
      type={
        props.attrType === "numeric"
          ? "number"
          : "text"
      }
      label={props.attrLabel}
    />
  );
}

export default CustomTextField;
