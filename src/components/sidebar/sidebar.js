import React from "react";

const SideBarMenu = React.forwardRef(({ show }, ref) => {
  return (
    <div
      className={`w-[300px] bg-gray-200 fixed top-0 left-0 bottom-0 z-10 transition-all ${
        show ? "" : "-translate-x-full"
      }`}
      ref={ref}></div>
  );
});

export default SideBarMenu;
