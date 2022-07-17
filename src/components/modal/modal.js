import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { BsFillTrashFill, BsImageFill } from "react-icons/bs";
const ModalLogin = ({ open, handleClose }) => {
  const potal = document.querySelector("body");
  if (typeof document === "undefined") {
    return <div className="modal"></div>;
  }
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-black opacity-70 z-10 flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}>
      <div className="max-w-[350px] mx-auto w-full bg-white rounded-lg p-8 text-black relative">
        <h4 className="text-center font-medium mb-3">WebCome Back</h4>
        <div className="flex items-center gap-4 justify-center mb-5">
          <span>Login BY Google</span>
          <div className="p-2 bg-purple-700 rounded text-white">
            <BsImageFill></BsImageFill>
          </div>
        </div>
        <div className="group-input mb-3 flex flex-col gap-y-2">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Your Email"
            className="bg-gray-200 rounded-lg px-4 py-2"
          />
        </div>
        <div className="group-input mb-3 flex flex-col gap-y-2">
          <label htmlFor="email">Password:</label>
          <input
            type="text"
            placeholder="Your Paasowrd"
            className="bg-gray-200 rounded-lg px-4 py-2"
          />
        </div>
        <p className="flex  justify-end mb-3">forgot the password</p>
        <button className="px-4 py-2 bg-purple-700 text-white text-center rounded-lg w-full mb-3">
          Login
        </button>
        <p className="flex  justify-end mb-3 text-purple-700">
          I don't have Account
        </p>
        <div
          className="absolute top-[20px] right-[20px] text-lg"
          onClick={handleClose}>
          <BsFillTrashFill></BsFillTrashFill>
        </div>
      </div>
    </div>,
    potal
  );
};
ModalLogin.propTypes = {
  // open, handleClose
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default ModalLogin;
