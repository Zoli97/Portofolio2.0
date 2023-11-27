import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { themeActions } from "../store/darkTheme.js";
import { motion as mo } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Hamburger from "./Hamburger";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../styles/Navbar.css";
function Navbar() {
  //**i need the action creator that is the dispatch, this will return me an action so when i click the button i need to toggle theme (in simple term dispatch an action)

  const [isOpen, setIsOpen] = useState(false);
  const my_dispatch = useDispatch();

  //so this is a state with an initial value of true(light theme activated),
  // the toggle state logic when its light theme then the icon is moon and vice versa.(true value is light icon and the false value is moon icon)
  const [theme, setTheme] = useState(true);
  const isMobile = useMediaQuery("(width <= 768px)");
  // const sun = {
  //   color: "yellow",
  // };

  // const moon = {
  //   color: "black",
  // };
  // const icon = theme ? (
  //   <DarkModeIcon style={moon} />
  // ) : (
  //   <LightModeIcon style={sun} />
  // );

  const links = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About", to: "/about" },
    { id: 3, name: "Gallery", to: "/gallery" },
    { id: 4, name: "Contact", to: "/contact" },
  ];

  const ToggleTheTheme = () => {
    my_dispatch(themeActions.toggleTheme());
    setTheme(!theme);
  };

  const OpenTheNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      transition: { delay: 0.4, duration: 0.6 },
      transform: "translateX(0%)",
    },

    closed: {
      transform: "translateX(100%)",
    },
  };

  const menuTransition = {
    type: "spring",
    duration: 1,
    delay: 0.2,
    stiffness: 33,
  };

  const listVariants = isMobile
    ? {
        show: {
          transform: "translateX(0em)",
          opacity: 1,
        },

        hide: {
          transform: "translateX(4em)",
          opacity: 0,
        },
      }
    : "";
  return (
    <div className=" container flex w-full content-center items-center justify-around  p-6 sm:items-center">
      <div className="overflow-hidden">
        <Link to="/">
          <motion.h2
            className="top_navbar_title text-2xl font-bold   text-[#042740] sm:text-[32px]"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Create
          </motion.h2>
        </Link>
      </div>
      <nav className=" navbar flex items-center ">
        <motion.ul
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={menuTransition}
          className={`nav-menu 
          ${
            isOpen ? "active responsive_navbar " : ""
          }  flex w-3/12 gap-8 text-xl font-light text-[#042740]`}
        >
          {links.map(({ id, name, to }) => (
            <mo.a
              className="link list_text nav-item cursor-pointer"
              key={id}
              name={name}
              href={to}
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={{
                show: {
                  ...listVariants.show,
                  transition: { delay: 1.5, duration: 1.5 },
                },

                hide: {
                  ...listVariants.hide,
                },
              }}
            >
              {name}
            </mo.a>
          ))}
          <mo.li
            className=" link list_text nav-item cursor-pointer"
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={{
              show: {
                ...listVariants.show,
                transition: { delay: 1.5, duration: 1.5 },
              },

              hide: {
                ...listVariants.hide,
              },
            }}
          >
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="checkbox"
                onChange={ToggleTheTheme}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <BsMoonStarsFill color="white" />
                <BsFillSunFill color="yellow" />
                <span className="ball"></span>
              </label>
            </div>
          </mo.li>
        </motion.ul>
      </nav>
      <div className="burger">
        <Hamburger clicked={isOpen} OpenTheNavbar={OpenTheNavbar} />
      </div>
    </div>
  );
}

export default Navbar;
