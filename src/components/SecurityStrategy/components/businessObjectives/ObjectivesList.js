import React from "react";
// === Components ===
import ObjectiveDetails from "./ObjectiveDetails";
// === Components - bootstrap ===
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const ObjectivesList = (props) => {
  const { objectives, setShowForm } = props;

  return (
    <>
      {/* Objective Header */}
      <header className="position-relative">
        <div className="font_lg w-75">Strategic Business Objectives</div>
        <Button
          className="App__btn btn_primary"
          onClick={() => setShowForm(true)}
          style={{ position: "absolute", bottom: "0", right: "0" }}
        >
          {objectives.length === 0 ? <span>Add</span> : null}
          {objectives.length < 3 && objectives.length > 0 ? <span>Add / Update</span> : null}
          {objectives.length === 3 ? <span>Update</span> : null}
        </Button>
      </header>

      <hr />

      {/* Objective Alert Message */}
      <section>
        {objectives.length === 0 ? (
          <Alert variant="primary" className="font_md">
            There are no business objectives to display. Please, register new objectives by clicking&nbsp;
            <u onClick={() => setShowForm(true)} style={{ cursor: "pointer" }}>
              here
            </u>
            .
          </Alert>
        ) : null}
      </section>

      {/* Objectives List */}
      <section>
        {objectives &&
          objectives.map((objective, index) => {
            return (
              <span key={index}>
                <ObjectiveDetails objective={objective} />
              </span>
            );
          })}
      </section>
    </>
  );
};

export default ObjectivesList;
