import React, { useState } from "react";
// === Components ===
import Measure from "../../NewObjectives/components/Measure";
import { createObjectives } from "../../../../../../utilities/localStorageConnection";
import { useFormik } from "formik";
import { objectiveSchema } from "../../../../../../schemas/ObjectiveSchema";
import { v4 as uuidv4 } from "uuid";
import CustomInputField from "../../../../../../UICompnents/CustomInputField";
import CustomDateField from "../../../../../../UICompnents/CustomDateField";
// === Components - bootstrap ===
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";

const NewObjective = (props) => {
  const { item, index, decreaseCount, setResMessage } = props;

  // Component states
  const [objectiveSubmited, setObjectiveSumbited] = useState(false);

  // Handle objective submit
  const submitObjective = (values, actions) => {
    const newObjectiveData = { ...values };
    const response = createObjectives(newObjectiveData);
    setResMessage(response);
    actions.resetForm();
    setObjectiveSumbited(true);
  };

  // Formik validation hook
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: item,
      validationSchema: objectiveSchema,
      onSubmit: submitObjective,
    });

  // Hanlde objective measures increase
  const handleMeasuresInc = (e) => {
    let measuresList = [...values.measures];
    if (measuresList.length < 3) {
      measuresList.push({ uuid: uuidv4(), title: "" });
      e.target.name = "measures";
      e.target.value = measuresList;
      handleChange(e);
    }
  };

  // Hanlde objective measures decrease
  const handleMeasuresDec = (e, item) => {
    let measuresList = [...values.measures];
    measuresList = measuresList.filter((measure) => measure.uuid !== item.uuid);
    e.target.name = "measures";
    e.target.value = measuresList;
    handleChange(e);
  };

  return (
    <div className="p-4 mb-3 objective__container">
      {!objectiveSubmited ? (
        <form onSubmit={handleSubmit}>
          {/* Form row one */}
          <Row className="mb-3">
            <Col sm={12} md={12} lg={6} className="mb-3">
              <CustomInputField
                label={`Objective ${index + 1}`}
                name={"title"}
                value={values.title}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.title}
                touched={touched.title}
              />
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Row>
                <Col sm={12} md={6} lg={6} className="mb-3">
                  <CustomDateField
                    label="Start Date"
                    name={"startDate"}
                    value={values.startDate}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.startDate}
                    touched={touched.startDate}
                  />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <CustomDateField
                    label="End Date"
                    name={"endDate"}
                    value={values.endDate}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.endDate}
                    touched={touched.endDate}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Form row two */}
          <Row className="mb-3">
            <Col sm={12} md={12} lg={6} className="mb-3">
              {/* Key measures label */}
              <section className="form__lable_secondary">
                <div>Key Measures</div>
                <div className="font_sm pt-1">
                  Add additional key measures&nbsp;&nbsp;
                  <MdAddCircle
                    className="App__icon"
                    onClick={handleMeasuresInc}
                  />
                </div>
              </section>

              {/* Key Measures List */}
              <section>
                {values.measures.map((measure, index) => {
                  return (
                    <span key={measure.uuid}>
                      <Measure
                        index={index}
                        item={measure}
                        value={measure.title}
                        handleMeasuresDec={handleMeasuresDec}
                        handleChange={handleChange}
                        name={`measures[${index}].title`}
                        errors={errors?.measures}
                        touched={touched?.measures}
                        handleBlur={handleBlur}
                      />
                    </span>
                  );
                })}
              </section>
            </Col>
          </Row>
          {/* Form buttons */}
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-danger"
              className="App__btn"
              onClick={() => decreaseCount(item)}
            >
              Delete
            </Button>
            <Button className="App__btn btn_primary ml-4" type="submit">
              Update
            </Button>
          </div>
        </form>
      ) : (
        <>
          <Alert variant="success" className="font_md">
            Objective has been submitted.
          </Alert>
        </>
      )}
    </div>
  );
};

export default React.memo(NewObjective);
