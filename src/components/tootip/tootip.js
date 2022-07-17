import React from "react";
import { useHover } from "../../customHook/customhook";
const TootipContent = ({ children }) => {
  return (
    <p className="desc px-6 py-4 bg-red-300 text-white rounded-md inline-block">
      {children}
    </p>
  );
};
const Tootip = ({ text, children }) => {
  const { hover, nodeRef } = useHover();
  return (
    <div>
      {hover && <TootipContent children={children}></TootipContent>}
      <span
        className="font-bold px-4 py-2 bg-red-400 text-white rounded-md"
        ref={nodeRef}>
        {text}
      </span>
    </div>
  );
};

export default Tootip;
