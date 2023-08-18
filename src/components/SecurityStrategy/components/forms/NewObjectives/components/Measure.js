import React from "react";
// === Components ===
import { useFormik } from "formik";
import { measureSchema } from "../../../../../../schemas/MeasureSchema";
import CustomInputField from "../../../../../../UICompnents/CustomInputField";
// === Components - icons ===
import { BiSolidMinusCircle } from "react-icons/bi";

const Measure = (props) => {
  const { index, item, updateMeasureValue, handleMeasuresDec } = props;

  // Formik validation hook
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: { title: "" },
    validationSchema: measureSchema,
  });

  // Handle input change
  const submitMeasure = (e) => {
    updateMeasureValue(item, e.target.value);
  };

  return (
    <>
      <div className="position-relative mb-2">
        {/* Remove button */}
        {index > 0 ? (
          <BiSolidMinusCircle
            className="App__icon App__icon_remove"
            onClick={() => handleMeasuresDec(item)}
          />
        ) : null}

        <CustomInputField
          label={``}
          name={"title"}
          value={values.title}
          handleBlur={handleBlur}
          handleChange={(e) => {
            handleChange(e);
            submitMeasure(e);
          }}
          error={errors.title}
          touched={touched.title}
        />
      </div>
    </>
  );
};

export default React.memo(Measure);
