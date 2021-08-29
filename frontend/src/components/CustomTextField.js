import { TextField } from "@material-ui/core";

function CustomTextField(props) {
  function handleChange(e) {
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
      key={props.state.textField[props.index]}
      value={props.state.textField[props.index]}
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
