import React, { useState } from "react";
// === Components - icons ===
import { BiSolidMinusCircle } from "react-icons/bi";

const Measure = (props) => {
  const { index, item, handleUpdateMeasures, handleMeasuresCount } = props;

  // Component states
  const [keyMeasure, setKeyMeasure] = useState(item ? item.title : "");

  // Handle input change
  const handleChange = (e) => {
    setKeyMeasure(e.target.value);
    handleUpdateMeasures(item, e.target.value);
  };

  return (
    <>
      <input type="text" name="measure" value={keyMeasure} className="form__input" onChange={handleChange} />
      {index > 0 ? (
        <BiSolidMinusCircle
          className="App__icon App__icon_remove"
          onClick={() => {
            handleMeasuresCount("decrease", index);
          }}
        />
      ) : null}
    </>
  );
};

export default Measure;
