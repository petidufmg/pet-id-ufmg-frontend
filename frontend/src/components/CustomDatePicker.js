import { Button } from "@material-ui/core";
import DatePicker from "react-multi-date-picker";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function CustomDatePicker(props) {
  let location = useLocation();
  const state = location.state || { date: {}, dates: {} };
  const [date, setDate] = useState(state.date[props.index] || {});
  const [dates, setDates] = useState(state.dates[props.index] || {});
  const [variant, setVariant] = useState(
    state.date[props.index] || state.dates[props.index]
      ? "contained"
      : "outlined"
  );

  function handleDateChange(value) {
    value !== null ? setVariant("contained") : setVariant("outlined");
    setDate(value);
    props.setState((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        [props.index]: value.toDate(),
      },
    }));
  }
  function handleDatesChange(value) {
    value.length > 0 ? setVariant("contained") : setVariant("outlined");
    setDates(value);
    props.setState((prev) => ({
      ...prev,
      dates: {
        ...prev.dates,
        [props.index]: value.map((o) => o.toDate()),
      },
    }));
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
      value={props.isMultiple ? dates : date}
      onChange={props.isMultiple ? handleDatesChange : handleDateChange}
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
