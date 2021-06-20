import CustomRadio from "../components/CustomRadio";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomSelector from "../components/CustomSelector";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
import { Button, TextField } from "@material-ui/core";
import _ from "lodash";

function addPetFormSwitcher(pet) {
  const [attrLabel, isMultipleAttr] = pet;
  if (_.includes(attrLabel, "Data")) {
    return (
      <CustomDatePicker
        isMultiple={isMultipleAttr}
        label={attrLabel}
        variant="outlined"
        plugins={
          isMultipleAttr
            ? [
                <DatePanel header="Datas" />,
                <Toolbar
                  position="bottom"
                  names={{ today: "Hoje", deselect: "Limpar", close: "Fechar" }}
                />,
              ]
            : [
                <Toolbar
                  position="bottom"
                  names={{ today: "Hoje", deselect: "Limpar", close: "Fechar" }}
                />,
              ]
        }
      />
    );
  } else if (attrLabel === "Sexo") {
    return <CustomRadio />;
  } else if (attrLabel === "Porte") {
    return <CustomSelector />;
  } else if (attrLabel === "Local de captura") {
    return (
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to="/pet-locale"
        endIcon={<EditIcon />}
      >
        Local de captura
      </Button>
    );
  } else {
    return (
      <TextField
        variant="outlined"
        type={
          attrLabel === "Número do microchip" || "Idade" ? "number" : "text"
        }
        label={attrLabel}
      />
    );
  }
}

export default addPetFormSwitcher;
