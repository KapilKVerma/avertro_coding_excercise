import React from "react";
// === Components ===
import DatePicker from "react-datepicker";
// === Components - icons ===
import { MdDateRange } from "react-icons/md";
// === Styles ===
import "react-datepicker/dist/react-datepicker.css";

const CustomDateField = (props) => {
  const { label, name, value, handleBlur } = props;
  const { handleChange, error, touched } = props;

  return (
    <>
      <div className="form__label_primary">{label}</div>
      <div className="position-relative">
        <DatePicker
          id={name}
          value={value}
          className="form__input_date"
          onBlur={handleBlur}
          selected={value}
          dateFormat="dd/MM/yyyy"
          onChange={(date, e) => {
            e.target.name = name;
            e.target.value = date;
            handleChange(e);
          }}
        />

        <MdDateRange className="App__icon_date" />
      </div>
      {error && touched ? (
        <p className="text-danger font_sm pt-2">{error}</p>
      ) : null}
    </>
  );
};

export default CustomDateField;
