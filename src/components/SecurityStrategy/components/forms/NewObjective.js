import React, { useState } from "react";
// === Components ===
import { createObjectives } from "../../../../utilities/localStorageConnetion";
import Measure from "./Measure";
import { useFormik } from "formik";
import { objectiveSchema } from "../../../../schemas/ObjectiveSchema";
// === Components - bootstrap ===
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

const NewObjective = (props) => {
  const { index, decreaseCount, setResMessage } = props;

  // Component states
  const [objectiveMeasures, setObjectiveMeasures] = useState([
    { id: new Date().toString(), title: "" },
  ]);
  const [objectiveSubmited, setObjectiveSumbited] = useState(false);
  const [measuresError, setMeasuresError] = useState("");

  // Handle objective delete
  const handleDelete = () => {
    setObjectiveMeasures([{ id: new Date().toString(), title: "" }]);
    decreaseCount();
  };

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

    // Create new objective
    const newObjectiveData = { ...values, measures: objectiveMeasures };
    const response = createObjectives(newObjectiveData);
    setResMessage(response);
    actions.resetForm();
    setObjectiveSumbited(true);
  };

  // Formik validation hook
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        id: new Date().toTimeString(),
        title: "",
        startDate: "",
        endDate: "",
      },
      validationSchema: objectiveSchema,
      onSubmit: submitObjective,
    });

  // Handle objective measures update
  const handleUpdateMeasures = (item, value) => {
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
    measuresList.push({ id: new Date().toTimeString(), title: "" });
    setObjectiveMeasures(measuresList);
  };

  // Hanlde objective measures decrease
  const handleMeasuresDec = (item) => {
    let measuresList = [...objectiveMeasures];
    measuresList = measuresList.filter((measure) => measure.id !== item.id);
    setObjectiveMeasures(measuresList);
  };

  return (
    <div className="p-4 mb-3 objective__container">
      {!objectiveSubmited ? (
        <form onSubmit={handleSubmit}>
          {/* Form row one */}
          <Row className="mb-3">
            <Col sm={12} md={12} lg={6}>
              <section className="mb-3">
                <div className="form__label_primary">Objective {index + 1}</div>
                <input
                  id="title"
                  type="text"
                  name="title"
                  onBlur={handleBlur}
                  value={values.title}
                  className="form__input"
                  onChange={handleChange}
                />
                {errors.title && touched.title ? (
                  <p className="text-danger font_sm pt-2">{errors.title}</p>
                ) : null}
              </section>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Row>
                <Col sm={12} md={12} lg={6}>
                  <section className="mb-3">
                    <div className="form__label_primary">Start Date</div>
                    <div className="position-relative">
                      <input
                        id="startDate"
                        type="date"
                        name="startDate"
                        className="form__input_date"
                        onBlur={handleBlur}
                        value={values.startDate}
                        onChange={handleChange}
                      />
                      <MdDateRange className="App__icon_date" />
                    </div>
                    {errors.startDate && touched.startDate ? (
                      <p className="text-danger font_sm pt-2">{errors.title}</p>
                    ) : null}
                  </section>
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <section>
                    <div className="form__label_primary">End Date</div>
                    <div className="position-relative">
                      <input
                        id="endDate"
                        type="date"
                        name="endDate"
                        className="form__input_date"
                        onBlur={handleBlur}
                        value={values.endDate}
                        onChange={handleChange}
                      />
                      <MdDateRange className="App__icon_date" />
                    </div>
                    {errors.endDate && touched.endDate ? (
                      <p className="text-danger font_sm pt-2">{errors.title}</p>
                    ) : null}
                  </section>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Form row two */}
          <Row className="mb-3">
            <Col sm={12} md={12} lg={6}>
              <section className="mb-3">
                <div className="form__lable_secondary">
                  <div>Key Measures</div>
                  <div className="font_sm pt-1">
                    Add additional key measures&nbsp;&nbsp;
                    <MdAddCircle
                      className="App__icon"
                      onClick={handleMeasuresInc}
                    />
                  </div>
                </div>

                {objectiveMeasures.map((measure, index) => {
                  return (
                    <span key={index}>
                      <Measure
                        index={index}
                        item={measure}
                        handleUpdateMeasures={handleUpdateMeasures}
                        handleMeasuresDec={handleMeasuresDec}
                      />
                    </span>
                  );
                })}

                {measuresError ? (
                  <p className="text-danger font_sm">{measuresError}</p>
                ) : null}
              </section>
            </Col>
          </Row>
          {/* Form buttons */}
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-danger"
              className="App__btn"
              onClick={handleDelete}
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
