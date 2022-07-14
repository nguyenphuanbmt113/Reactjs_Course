import React, { useState } from "react";
import "./toggle.css";
const Toggle = () => {
  //logic
  const [isActive, setIsActive] = useState(false); //[flase, function]
  const handleLick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="toggle" onClick={() => handleLick()}>
      <div className={isActive ? "circle isActive" : "circle"}></div>
    </div>
  );
};
export default Toggle;
