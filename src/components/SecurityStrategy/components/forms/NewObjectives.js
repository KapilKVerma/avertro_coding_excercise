import React, { useState } from "react";
// === Components ===
import NewObjective from "./NewObjective";
import { deleteObjectives } from "../../../../utilities/localStorageConnetion";
import AppAlerts from "../../../../UICompnents/AppAlerts";
// === Components - bootstrap ===
import Button from "react-bootstrap/Button";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const NewObjectives = (props) => {
  const { setShowForm, data, setData } = props;
  let defaultCount = [1]; // Try to get rid of this logic
  if (data.length > 0) defaultCount = [...Array(data.length).keys()].map((i) => i + 1);

  // Component states
  const [resMessage, setResMessgae] = useState("");
  const [objecCount, setObjecCount] = useState(defaultCount);

  // Handle objecCount increament
  const increaseCount = () => {
    if (objecCount.length < 3) setObjecCount([...objecCount, 1]);
  };

  // Handle objecCount decrement
  const decreaseCount = () => {
    let count = [...objecCount];
    setObjecCount(count.slice(objecCount.length - 1));
  };

  // Hanlde objective delete
  const deleteObjective = (objective) => {
    const updatedObjectivesList = [...data.filter((item) => item.id !== objective.id)];
    const response = deleteObjectives(updatedObjectivesList);
    setResMessgae(response);
    setData(updatedObjectivesList);
    decreaseCount();
  };

  return (
    <>
      {/* Alert message pop up */}
      {resMessage && <AppAlerts message={resMessage} showAlert={true} setResMessgae={setResMessgae} />}

      <form>
        {/* New objective form */}
        <section>
          {objecCount.map((_, index) => {
            return (
              <span key={index}>
                <NewObjective
                  index={index}
                  item={data[index]}
                  data={data}
                  setData={setData}
                  decreaseCount={decreaseCount}
                  deleteObjective={deleteObjective}
                  setResMessgae={setResMessgae}
                />
              </span>
            );
          })}
        </section>

        {/* Form buttons */}
        <section>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" className="App__btn" onClick={() => setShowForm(false)}>
              <MdCancel className="App__icon mr-2" />
              Cancel
            </Button>
            {objecCount.length < 3 ? (
              <Button className="App__btn btn_primary ml-4" onClick={increaseCount}>
                <MdAddCircle className="App__icon mr-2" />
                Add Objective
              </Button>
            ) : null}
          </div>
        </section>
      </form>
    </>
  );
};

export default NewObjectives;
