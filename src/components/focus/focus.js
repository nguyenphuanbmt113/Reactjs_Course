import React, { useEffect, useRef } from "react";

const Focus = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="input-div">
      <input
        type="text"
        ref={inputRef}
        className={inputRef.current ? "border-2 border-blue-300" : "border-2"}
        placeholder="text..."
      />
    </div>
  );
};

export default Focus;
