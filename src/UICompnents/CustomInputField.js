import React from "react";

const CustomInputField = (props) => {
  const { label, name, value, handleBlur } = props;
  const { handleChange, error, touched, id } = props;
  return (
    <>
      <div className="w-100">
        <div className="form__label_primary">{label}</div>
        <input
          id={id ? id : name}
          type="text"
          name={name}
          className="form__input"
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error && touched ? (
          <p className="text-danger font_sm pt-2">{error}</p>
        ) : null}
      </div>
    </>
  );
};

export default CustomInputField;
