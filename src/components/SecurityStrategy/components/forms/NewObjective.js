import React, { useState } from "react";
// === Components ===
import { createObjectives, updateObjectives } from "../../../../utilities/localStorageConnetion";
import Measure from "./Measure";
// === Components - bootstrap ===
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
// === Styles ===
import "react-datepicker/dist/react-datepicker.css";

const NewObjective = (props) => {
  const { index, item, data, setData, decreaseCount, deleteObjective, setResMessgae } = props;

  // Component states
  const [objective, setObjective] = useState({
    id: item ? item.id : "",
    title: item ? item.title : "",
    startDate: item ? new Date(item.startDate) : "",
    endDate: item ? new Date(item.endDate) : "",
    measures: item ? item.measures : [{ title: "" }],
  });

  // Handle objective submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      // Update objective
      let objectToUpdate = [...data];
      objectToUpdate[index] = objective;
      const response = updateObjectives(objectToUpdate);
      setResMessgae(response);
      setData(objectToUpdate);
    } else {
      // Create new objective
      const newObjectiveData = { ...objective, id: new Date() };
      const updatedObjectivesList = [...data, newObjectiveData];
      const response = createObjectives(updatedObjectivesList);
      setResMessgae(response);
      setData(updatedObjectivesList);
    }
  };

  // Handle objective delete
  const handleDelete = () => {
    if (item) {
      deleteObjective(objective);
      setObjective({
        id: "",
        title: "",
        startDate: "",
        endDate: "",
        measures: [{ title: "" }],
      });
    } else decreaseCount();
  };

  // Handle objective measures update
  const handleUpdateMeasures = (item, value) => {
    let measures = [...objective.measures];
    measures.forEach((measure) => {
      if (measure.title.toLowerCase() === item.title.toLowerCase()) {
        measure.title = value;
      }
    });
    setObjective({ ...objective, measures });
  };

  // Hanlde objective measures count
  const handleMeasuresCount = (value, indexValue = objective.measures.length - 1) => {
    let measuresList = [...objective.measures];
    if (value === "increase") measuresList.push({ title: "" });
    if (value === "decrease") measuresList = measuresList.filter((_, index) => index !== indexValue);
    setObjective({ ...objective, measures: measuresList });
  };

  return (
    <div className="p-4 mb-3 objective__container">
      {/* Form row one */}
      <Row className="mb-3">
        <Col sm={12} md={12} lg={6}>
          <section className="mb-3">
            <div className="form__label_primary">Objective {index + 1}</div>
            <input
              type="text"
              name="title"
              value={objective.title}
              className="form__input"
              onChange={(e) => setObjective({ ...objective, title: e.target.value })}
            />
          </section>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <Row>
            <Col sm={12} md={12} lg={6}>
              <section className="mb-3">
                <div className="form__label_primary">Start Date</div>
                <div className="position-relative">
                  <DatePicker
                    name="startDate"
                    className="form__input_date"
                    dateFormat="dd/MM/yyyy"
                    selected={objective.startDate}
                    onChange={(date) => setObjective({ ...objective, startDate: date })}
                  />
                  <MdDateRange className="App__icon_date" />
                </div>
              </section>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <section>
                <div className="form__label_primary">End Date</div>
                <div className="position-relative">
                  <DatePicker
                    name="endDate"
                    className="form__input_date"
                    dateFormat="dd/MM/yyyy"
                    selected={objective.endDate}
                    onChange={(date) => setObjective({ ...objective, endDate: date })}
                  />
                  <MdDateRange className="App__icon_date" />
                </div>
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
                <MdAddCircle className="App__icon" onClick={() => handleMeasuresCount("increase")} />
              </div>
            </div>

            {objective.measures.map((measure, index) => {
              return (
                <div className="d-flex flex-row justify-content-start position-relative mb-2" key={index}>
                  <Measure
                    index={index}
                    item={measure}
                    handleUpdateMeasures={handleUpdateMeasures}
                    handleMeasuresCount={handleMeasuresCount}
                  />
                </div>
              );
            })}
          </section>
        </Col>
      </Row>
      {/* Form buttons */}
      <div className="d-flex justify-content-end">
        <Button variant="outline-danger" className="App__btn" onClick={handleDelete}>
          Delete
        </Button>
        <Button className="App__btn btn_primary ml-4" onClick={handleSubmit}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default NewObjective;
