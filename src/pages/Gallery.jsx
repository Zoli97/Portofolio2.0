import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FixedBackgrounds } from "../components/FixedBackgrounds";
import { motion as m } from "framer-motion";
import { GlobalStyles } from "../styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lighTheme, darkTheme } from "../styled/theme";
import { useSelector } from "react-redux";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../styles/Gallery.css";
import Footer from "../components/Footer";

function Gallery() {
  const { theme } = useSelector((state) => state.dark_theme);
  const checkCurrentTheme = theme === "light" ? lighTheme : darkTheme;

  const [showTopBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ThemeProvider theme={checkCurrentTheme}>
      <GlobalStyles />
      <m.div
        className="gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ oapcity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <Navbar />

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ oapcity: 0 }}
          transition={{ duration: 2.5 }}
        >
          <header className="header gallery  ">
            <div className="gallery header center container py-4 ">
              <m.h1
                className="text-center text-3xl sm:text-7xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.2, delay: 2.5 }}
              >
                Welcome to my Gallery
              </m.h1>
            </div>
          </header>
          <FixedBackgrounds />
        </m.div>

        {showTopBtn && (
          <div className="top-to-btm ">
            <div
              className="icon-position icon-style showTopBtn"
              onClick={goToTop}
            >
              <ArrowUpwardIcon />
            </div>
          </div>
        )}
        <Footer />
      </m.div>
    </ThemeProvider>
  );
}

export default Gallery;
