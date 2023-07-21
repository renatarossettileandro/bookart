import React from "react";

export const Counter = (props) => {
  const { id, unit, onQuantityChange } = props;

  const handlePlus = () => {
    onQuantityChange(id, unit + 1);
  };

  const handleMinus = () => {
    if (unit >= 2) {
      onQuantityChange(id, unit - 1);
    }
  };

  return (
    <div className="Counter Flex">
      <button className="Menos" onClick={handleMinus}>
        -
      </button>
      <p>{unit}</p>
      <button className="Soma" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};
