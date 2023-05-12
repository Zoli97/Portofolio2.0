import React from "react";

function Hamburger({ OpenTheNavbar, clicked }) {
  return (
    <div className="hamburger">
      {" "}
      <div
        className={`icon   nav-icon-5 ${clicked ? "open" : ""} `}
        onClick={OpenTheNavbar}
      >
        <span className="hamburger_on_dark_bg hamburger_on_light_bg"></span>
        <span className="hamburger_on_dark_bg hamburger_on_light_bg"></span>
        <span className="hamburger_on_dark_bg hamburger_on_light_bg"></span>
      </div>
    </div>
  );
}
//FF2A00
export default Hamburger;
