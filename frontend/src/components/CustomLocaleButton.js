import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function CustomLocaleButton(props) {
  const history = useHistory();

  function handleLocaleClick() {
    history.replace({ pathname: "/pet-add", state: props.state });
    history.push({ pathname: "/pet-locale" , state: history.location.state , from: "/pet-add" });
  }

  function handleVariant() {
    switch (props.state.coordinates) {
      case undefined:
      case [0,0]:
        return "outlined";
      default:
        return "contained";
    }
  }

  return (
    <Button
      variant={handleVariant()}
      color="primary"
      endIcon={<EditIcon />}
      onClick={handleLocaleClick}
    >
      Local de captura
    </Button>
  );
}

export default CustomLocaleButton;
