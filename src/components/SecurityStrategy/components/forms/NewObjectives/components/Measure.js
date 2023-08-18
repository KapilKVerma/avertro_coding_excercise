import React from "react";
// === Components ===
import CustomInputField from "../../../../../../UICompnents/CustomInputField";
// === Components - icons ===
import { BiSolidMinusCircle } from "react-icons/bi";

const Measure = (props) => {
  const { index, name, item, value, handleMeasuresDec } = props;
  const { handleChange, errors, touched, handleBlur } = props;

  return (
    <>
      <div className="position-relative d-flex flex-row justify-content-start mb-2">
        <CustomInputField
          label={``}
          name={name}
          value={value}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors && errors[index]?.title}
          touched={touched && touched[index]?.title}
        />
        {/* Remove button */}
        {index > 0 ? (
          <BiSolidMinusCircle
            className="App__icon App__icon_remove"
            onClick={(e) => handleMeasuresDec(e, item)}
          />
        ) : null}
      </div>
    </>
  );
};

export default React.memo(Measure);
