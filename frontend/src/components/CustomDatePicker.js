import { Button } from "@material-ui/core";
import DatePicker from "react-multi-date-picker";
import EditIcon from "@material-ui/icons/Edit";
import { useEffect, useState } from "react";

function CustomDatePicker(props) {
  const [variant, setVariant] = useState(
    props.state.date[props.index] || props.state.dates[props.index]
      ? "contained"
      : "outlined"
  );

  useEffect(() => {
    if (props.state.date[props.index] || props.state.dates[props.index]) {
      setVariant("contained");
    } else {
      setVariant("outlined");
    }
  }, [props.state.date, props.state.dates]);

  function handleDateChange(value) {
    value !== null ? setVariant("contained") : setVariant("outlined");
    props.setState((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        [props.index]: value === null ? null : value.toDate(),
      },
    }));
  }
  function handleDatesChange(value) {
    value.length > 0 ? setVariant("contained") : setVariant("outlined");
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
      value={props.isMultiple ? props.state.dates[props.index] : props.state.date[props.index]}
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
