import React from "react";

function Hamburger({ OpenTheNavbar, clicked }) {
  return (
    <div className="hamburger">
      {" "}
      <div
        className={`icon   nav-icon-5 ${clicked ? "open" : ""} `}
        onClick={OpenTheNavbar}
      >
        <span className=""></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
//FF2A00
export default Hamburger;
