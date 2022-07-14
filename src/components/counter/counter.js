import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncreate = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>The Number is: {count}</h2>
      <button onClick={() => handleIncreate()}>Increate</button>
    </div>
  );
};

export default Counter;
