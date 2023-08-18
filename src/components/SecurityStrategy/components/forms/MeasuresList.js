import React from "react";
// === Component ===
import Measure from "./Measure";
// === Components - icons ===
import { MdAddCircle } from "react-icons/md";

const MeasuresList = (props) => {
  const { measures, updateMeasureValue, handleMeasuresDec } = props;
  const { handleMeasuresInc, measuresError } = props;

  return (
    <>
      {/* Label */}
      <section className="form__lable_secondary">
        <div>Key Measures</div>
        <div className="font_sm pt-1">
          Add additional key measures&nbsp;&nbsp;
          <MdAddCircle className="App__icon" onClick={handleMeasuresInc} />
        </div>
      </section>

      {/* Key Measures List */}
      <section>
        {measures.map((measure, index) => {
          return (
            <span key={measure.uuid}>
              <Measure
                index={index}
                item={measure}
                updateMeasureValue={updateMeasureValue}
                handleMeasuresDec={handleMeasuresDec}
              />
            </span>
          );
        })}
      </section>

      {/* Error */}
      <section>
        {measuresError ? (
          <p className="text-danger font_sm">{measuresError}</p>
        ) : null}
      </section>
    </>
  );
};

export default React.memo(MeasuresList);
