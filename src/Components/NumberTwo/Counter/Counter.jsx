import React, { useState } from "react";
import './style.css';

const Counter = () => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
