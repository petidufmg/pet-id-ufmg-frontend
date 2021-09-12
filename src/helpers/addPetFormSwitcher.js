import CustomRadio from "../components/CustomRadio";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomSelector from "../components/CustomSelector";
import CustomLocaleButton from "../components/CustomLocaleButton";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
import _ from "lodash";
import CustomTextField from "../components/CustomTextField";

function addPetFormSwitcher(pet, state, setState, index) {
  const [attrLabel, isMultipleAttr, attrType] = pet;

  if (_.includes(attrLabel, "Data")) {
    return (
      <CustomDatePicker
        state={state}
        setState={setState}
        index={index}
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
    return <CustomRadio state={state} setState={setState} />;
  } else if (attrLabel === "Porte") {
    return <CustomSelector state={state} setState={setState} />;
  } else if (attrLabel === "Local de captura") {
    return <CustomLocaleButton state={state} />;
  } else {
    return (
      <CustomTextField
        state={state}
        setState={setState}
        index={index}
        attrLabel={attrLabel}
        attrType={attrType}
      />
    );
  }
}

export default addPetFormSwitcher;
