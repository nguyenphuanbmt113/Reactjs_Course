import React from "react";
import useClickOutside from "../../customHook/useClickOutside";
import ReactDOM from "react-dom";
const Items = () => {
  <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
    <div className="py-3 border-b border--b-gray-100 cursor-pointer">
      Javascript
    </div>
    <div className="py-3 border-b border--b-gray-100 cursor-pointer">
      Reactjs
    </div>
    <div className="py-3 border-b border--b-gray-100 cursor-pointer">
      Nodejs
    </div>
    <div className="py-3 border-b border--b-gray-100 cursor-pointer">
      SailJs
    </div>
  </div>;
};
const Dropdown = () => {
  const { handleShow, show, dropDownRef } = useClickOutside();
  return ReactDOM.createPortal(
    <div>
      <div className="relative w-full max-w-[400px] m-5" ref={dropDownRef}>
        <div
          className="selection p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
          onClick={() => handleShow()}>
          Select
        </div>
        {show ? <Items></Items> : ""}
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Dropdown;
