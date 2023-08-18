import React, { useState } from "react";
// === Components ===
import { createObjectives } from "../../../../utilities/localStorageConnetion";
import MeasuresList from "./MeasuresList";
import { useFormik } from "formik";
import { objectiveSchema } from "../../../../schemas/ObjectiveSchema";
import { v4 as uuidv4 } from "uuid";
import CustomInputField from "../../../../UICompnents/CustomInputField";
import CustomDateField from "../../../../UICompnents/CustomDateField";
// === Components - bootstrap ===
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const NewObjective = (props) => {
  const { item, index, decreaseCount, setResMessage } = props;

  // Component states
  const [objectiveMeasures, setObjectiveMeasures] = useState([
    { uuid: uuidv4(), title: "" },
  ]);
  const [objectiveSubmited, setObjectiveSumbited] = useState(false);
  const [measuresError, setMeasuresError] = useState("");

  // Handle objective submit
  const submitObjective = (values, actions) => {
    let errors = [];

    objectiveMeasures.forEach((measure) => {
      if (!measure.title) errors.push(false);
    });

    if (errors.includes(false)) {
      setMeasuresError("Enter key measures");
      return;
    }

    const newObjectiveData = { ...values, measures: objectiveMeasures };
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

  // Handle objective measures update
  const updateMeasureValue = (item, value) => {
    let measures = [...objectiveMeasures];
    measures.forEach((measure) => {
      if (measure.id === item.id) measure.title = value;
    });
    setObjectiveMeasures(measures);
    setMeasuresError("");
  };

  // Hanlde objective measures increase
  const handleMeasuresInc = () => {
    let measuresList = [...objectiveMeasures];
    if (measuresList.length < 3) {
      measuresList.push({ uuid: uuidv4(), title: "" });
      setObjectiveMeasures(measuresList);
    }
  };

  // Hanlde objective measures decrease
  const handleMeasuresDec = (item) => {
    let measuresList = [...objectiveMeasures];
    measuresList = measuresList.filter((measure) => measure.uuid !== item.uuid);
    setObjectiveMeasures([...measuresList]);
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
                <Col sm={12} md={12} lg={6} className="mb-3">
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
                <Col sm={12} md={12} lg={6}>
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
              <MeasuresList
                measures={objectiveMeasures}
                updateMeasureValue={updateMeasureValue}
                handleMeasuresDec={handleMeasuresDec}
                handleMeasuresInc={handleMeasuresInc}
                measuresError={measuresError}
              />
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

export default NewObjective;
