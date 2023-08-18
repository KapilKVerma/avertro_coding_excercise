import React, { useState } from "react";
// === Components ===
import ObjectiveDetails from "./ObjectiveDetails";
import AppAlerts from "../../../../UICompnents/AppAlerts";
// === Components - bootstrap ===
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const ObjectivesList = (props) => {
  const { data, setData, setShowForm } = props;

  // Component states
  const [resMessage, setResMessage] = useState("");

  return (
    <>
      {/* Alert message pop up */}
      {resMessage && (
        <AppAlerts
          message={resMessage}
          showAlert={true}
          setResMessage={setResMessage}
        />
      )}

      {/* Objective Header */}
      <header className="position-relative">
        <div className="font_lg w-75">Strategic Business Objectives</div>
        <Button
          className="App__btn btn_primary"
          onClick={() => setShowForm(true)}
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          Add
        </Button>
      </header>

      <hr />

      {/* Objective Alert Message */}
      <section>
        {data.length === 0 ? (
          <Alert variant="primary" className="font_md">
            There are no business objectives to display. Please, register new
            objectives by clicking&nbsp;
            <u onClick={() => setShowForm(true)} style={{ cursor: "pointer" }}>
              here
            </u>
            .
          </Alert>
        ) : null}
      </section>

      {/* Objectives List */}
      <section>
        {data.map((objective, index) => {
          return (
            <span key={index}>
              <ObjectiveDetails
                objective={objective}
                setData={setData}
                setResMessage={setResMessage}
              />
            </span>
          );
        })}
      </section>
    </>
  );
};

export default ObjectivesList;
