import React from "react";

// === Components - other ===
import { GoDotFill } from "react-icons/go";
import dayjs from "dayjs";

const ObjectiveDetails = (props) => {
  const { objective } = props;
  return (
    <div className="p-4 mb-3 objective__container">
      {/* Objective title */}
      <section>
        <span className="font_lg font-weight-bold text-capitalize">{objective.title}</span>
        <p className="text-dark">
          <span className="font_md mr-5">
            Start Date:&nbsp;{objective.startDate && dayjs(objective.startDate).format("DD/MM/YYYY")}
          </span>
          <span className="font_md">
            End Date:&nbsp;{objective.endDate && dayjs(objective.endDate).format("DD/MM/YYYY")}
          </span>
        </p>
      </section>

      {/* Objective measures */}
      <section className="text-dark">
        <span className="font_md font-weight-bold">Key Measures:</span>
        <div>
          {objective.measures.map((measure, index) => {
            return (
              <span key={index} className="font_md mr-4 text-capitalize" style={{ display: "inline-block" }}>
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
