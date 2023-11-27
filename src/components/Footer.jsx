import React from "react";
import { GlobalStyles } from "../styled/GlobalStyles";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <GlobalStyles />
      <footer className="footer__container footer_">
        <p className="copyright_text">@Copyright Tazlo Zoli 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
