import { Button } from "@material-ui/core";
import DatePicker from "react-multi-date-picker";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";

function CustomDatePicker(props) {
  const [date, setDate] = useState(new Date(undefined));
  const [dates, setDates] = useState([]);
  const [variant, setVariant] = useState("outlined");

  function handleDateChange(value) {
    value !== null ? setVariant("contained") : setVariant("outlined");
    setDate(value);
  }
  function handleDatesChange(value) {
    value.length > 0 ? setVariant("contained") : setVariant("outlined");
    setDates(value);
  }

  function handleButton(_, openCalendar) {
    return (
      <Button
        variant={variant}
        color="primary"
        onClick={openCalendar}
        endIcon={<EditIcon />}
      >
        {`${props.label}`}
      </Button>
    );
  }

  return (
    <DatePicker
      value={props.isMultiple? dates : date}
      onChange={props.isMultiple? handleDatesChange : handleDateChange}
      format="DD-MM-YYYY"
      multiple={props.isMultiple}
      type="custom"
      placeholder={props.label}
      months={[
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ]}
      weekDays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
      title="DatePicker"
      render={handleButton}
      plugins={props.plugins}
    />
  );
}

export default CustomDatePicker;
