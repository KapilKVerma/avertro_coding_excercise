import React, { useState } from "react";
// === Components ===
import NewObjective from "./components/NewObjective";
import AppAlerts from "../../../../../UICompnents/AppAlerts";
import { v4 as uuidv4 } from "uuid";
// === Components - bootstrap ===
import Button from "react-bootstrap/Button";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const NewObjectives = (props) => {
  const { setShowForm } = props;

  const initialObjectiveValues = {
    title: "",
    startDate: "",
    endDate: "",
  };

  // Component states
  const [resMessage, setResMessage] = useState("");
  const [objectivesList, setObjectiveList] = useState([
    { uuid: uuidv4(), ...initialObjectiveValues },
  ]);

  // Handle objective increament
  const increaseCount = () => {
    if (objectivesList.length < 3)
      setObjectiveList([
        ...objectivesList,
        { uuid: uuidv4(), ...initialObjectiveValues },
      ]);
  };

  // Handle objective decrement
  const decreaseCount = (item) => {
    let count = [...objectivesList];
    if (count.length > 0) {
      count = count.filter((objective) => objective.uuid !== item.uuid);
    }
    setObjectiveList(count);
  };

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

      {/* New objective form */}
      <section>
        {objectivesList.map((objective, index) => {
          return (
            <span key={objective.uuid}>
              <NewObjective
                index={index}
                item={objective}
                decreaseCount={decreaseCount}
                setResMessage={setResMessage}
              />
            </span>
          );
        })}
      </section>

      {/* Footer buttons */}
      <section>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="App__btn"
            onClick={() => setShowForm(false)}
          >
            <MdCancel className="App__icon mr-2" />
            Cancel
          </Button>
          {objectivesList.length < 3 ? (
            <Button
              className="App__btn btn_primary ml-4"
              onClick={increaseCount}
            >
              <MdAddCircle className="App__icon mr-2" />
              Add Objective
            </Button>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default NewObjectives;
