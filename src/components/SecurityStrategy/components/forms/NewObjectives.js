import React, { useState } from "react";
// === Components ===
import NewObjective from "./NewObjective";
import AppAlerts from "../../../../UICompnents/AppAlerts";
// === Components - bootstrap ===
import Button from "react-bootstrap/Button";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const NewObjectives = (props) => {
  const { setShowForm, data } = props;

  // Component states
  const [resMessage, setResMessage] = useState("");
  const [objecCount, setObjecCount] = useState([1]);

  // Handle objecCount increament
  const increaseCount = () => {
    if (objecCount.length < 3) setObjecCount([...objecCount, 1]);
  };

  // Handle objecCount decrement
  const decreaseCount = () => {
    let count = [...objecCount];
    setObjecCount(count.slice(0, objecCount.length - 1));
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
        {objecCount.map((_, index) => {
          return (
            <span key={index}>
              <NewObjective
                index={index}
                data={data}
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
          {objecCount.length < 3 ? (
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
