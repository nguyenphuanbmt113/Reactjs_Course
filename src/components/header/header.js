import React, { useEffect } from "react";
import "./header.scss";
const Header = () => {
  useEffect(() => {
    const handleFixed = () => {
      const menu = document.getElementById("menu");
      if (window.scrollY > 100) {
        menu.classList.add("fixed");
      } else {
         menu.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleFixed);
    return () => {
      window.removeEventListener("scroll", handleFixed)
    };
  }, []);

  return (
    <div>
      <div className="menu" id="menu"></div>
    </div>
  );
};

export default Header;
