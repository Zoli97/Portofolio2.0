import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { themeActions } from "../store/darkTheme.js";
import { motion as mo } from "framer-motion";
import Hamburger from "./Hamburger";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../styles/Navbar.css";
import { IconButton } from "@mui/material";

function Navbar() {
  //**i need the action creator that is the dispatch, this will return me an action so when i click the button i need to toggle theme (in simple term dispatch an action)

  const [isOpen, setIsOpen] = useState(false);
  const my_dispatch = useDispatch();

  //so this is a state with an initial value of true(light theme activated),
  // the toggle state logic when its light theme then the icon is moon and vice versa.(true value is light icon and the false value is moon icon)
  const [theme, setTheme] = useState(true);
  const sun = {
    color: "yellow",
  };

  const moon = {
    color: "black",
  };
  const icon = !theme ? (
    <LightModeIcon style={sun} />
  ) : (
    <DarkModeIcon style={moon} />
  );

  const ToggleTheTheme = () => {
    my_dispatch(themeActions.toggleTheme());
    setTheme(!theme);
  };

  const OpenTheNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  // useEffect(() => {
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);
  return (
    <div className="container flex w-full content-center items-center justify-around p-6  sm:items-center">
      <div className="overflow-hidden">
        <Link to="/">
          <mo.h2
            className="top_navbar_title text-2xl font-bold   text-[#042740] sm:text-[32px]"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Create
          </mo.h2>
        </Link>
      </div>
      <nav className=" navbar flex items-center ">
        <ul
          className={`nav-items  ${
            isOpen ? "active responsive_navbar" : ""
          }  flex w-3/12 gap-12 text-xl font-light text-[#042740]`}
        >
          <li className=" link cursor-pointer ">
            <Link className="list_text" to="/about">
              About
            </Link>
          </li>

          <li className=" link cursor-pointer ">
            <Link className="list_text" to="/gallery">
              Gallery
            </Link>
          </li>

          <li className=" link cursor-pointer">
            <Link className="list_text" to="/contact">
              Contact
            </Link>
          </li>

          <li>
            <IconButton onClick={ToggleTheTheme}>{icon}</IconButton>
          </li>
        </ul>
      </nav>
      <div className="burger">
        <Hamburger clicked={isOpen} OpenTheNavbar={OpenTheNavbar} />
      </div>
    </div>
  );
}

export default Navbar;
