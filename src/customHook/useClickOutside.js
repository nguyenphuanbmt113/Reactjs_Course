import { useEffect, useRef, useState } from 'react';

const useClickOutside = () => {
  const [show, setShow] = useState(false);
  const dropDownRef = useRef();
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    const handleClickOut = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target) && !e.target.matches("button")) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return {
    handleShow,
    show,
    dropDownRef,
  };
};

export default useClickOutside;