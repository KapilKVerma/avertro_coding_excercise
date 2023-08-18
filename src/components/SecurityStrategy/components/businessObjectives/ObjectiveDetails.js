import React, { useState } from "react";
// === Components ===
import { deleteObjectives } from "../../../../utilities/localStorageConnetion";
// === Components - bootstrap ===
import Button from "react-bootstrap/Button";
// === Components - other ===
import { GoDotFill } from "react-icons/go";
import { BiDotsVertical } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import dayjs from "dayjs";

const ObjectiveDetails = (props) => {
  const { objective, setResMessage, setData } = props;

  // Component states
  const [showMenu, setShowMenu] = useState(false);

  // Handle delete
  const handleDelete = () => {
    const response = deleteObjectives(objective);
    setResMessage(response.message);
    setData(response.data);
  };

  return (
    <div className="p-4 mb-3 objective__container ">
      {/* Objective title */}
      <section className="font_lg font-weight-bold text-capitalize position-relative">
        <span>{objective.title}</span>

        <span>
          <Button
            variant="light"
            style={{ position: "absolute", right: "0" }}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <AiOutlineClose className="font_md" />
            ) : (
              <BiDotsVertical className="font_md" />
            )}
          </Button>
          {showMenu ? (
            <div
              style={{ position: "absolute", right: "0" }}
              className="d-flex flex-column border mt-1 p-2"
            >
              <Button className="App__btn btn_primary mb-2" disabled>
                Update
              </Button>
              <Button
                variant="outline-danger"
                className="App__btn"
                onClick={() => {
                  handleDelete();
                  setShowMenu(!showMenu);
                }}
              >
                Delete
              </Button>
            </div>
          ) : null}
        </span>
      </section>

      {/* Objective dates */}
      <section>
        <p className="text-dark">
          <span className="font_md mr-5">
            Start Date:&nbsp;
            {objective.startDate &&
              dayjs(objective.startDate).format("DD/MM/YYYY")}
          </span>
          <span className="font_md">
            End Date:&nbsp;
            {objective.endDate && dayjs(objective.endDate).format("DD/MM/YYYY")}
          </span>
        </p>
      </section>

      {/* Objective measures */}
      <section className="text-dark">
        <span className="font_md font-weight-bold">Key Measures:</span>
        <div>
          {objective.measures.map((measure, index) => {
            return (
              <span
                key={index}
                className="font_md mr-4 text-capitalize"
                style={{ display: "inline-block" }}
              >
                <GoDotFill />
                &nbsp;&nbsp;{measure.title}
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ObjectiveDetails;
