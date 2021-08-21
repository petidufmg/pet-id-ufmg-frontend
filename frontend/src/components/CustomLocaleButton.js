import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function CustomLocaleButton(props) {
  const history = useHistory();

  function handleLocaleClick() {
    history.replace({ pathname: "/pet-add", state: props.state });
    history.push({ pathname: "/pet-locale" });
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      endIcon={<EditIcon />}
      onClick={handleLocaleClick}
    >
      Local de captura
    </Button>
  );
}

export default CustomLocaleButton;
