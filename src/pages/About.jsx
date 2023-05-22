import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import me from "../images/me1.jpg";
import me2 from "../images/me2.jpg";
import { motion as m, motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { lighTheme, darkTheme } from "../styled/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styled/GlobalStyles";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../styles/About.css";

function About() {
  const { theme } = useSelector((state) => state.dark_theme);
  const checkCurrentTheme = theme === "light" ? lighTheme : darkTheme;

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const my_variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 0.65, y: 50 },
  };

  //logic that takes the user back up to the top of the page.

  /**
   * *last things i want to take the theme variable from the store so i use the useSelector hook;
   * * create a state that will control the visibilty of the scroll top button that set to false by default, i want only appear after the user has scrolled down.
   * * i will use the useeffect hook to determine when i want to show the button and when i want it to disappear.
   * * add an eventlistener to the window to lsiten for a scroll and ruin the function when the conditional within the listener returns true.
   * * if the scroll is more than 400 the state function will sets to true otherwise is false.
   * * constantly will run when i scroll through the webpage and will thus update button to stop showing when its scrolled back
   */

  const [showTopBtn, setShowBtn] = useState(false);
  const title = "About Me";

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
        className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <Navbar />

        <Title
          className="title pt-14  text-center text-3xl font-bold text-[#042740] sm:text-4xl "
          style={{ x }}
        >
          {title.split("").map((letra, index) => (
            <span className="letra" key={index}>
              {letra}
            </span>
          ))}
        </Title>

        <div className="big-container about grid w-full place-items-center justify-around sm:flex sm:place-items-center lg:flex lg:items-center lg:justify-around ">
          <div className="text-container m-4 pt-14 sm:w-4/5  lg:w-2/5 ">
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 7 }}
              transition={{ ease: "easeOut", duration: 3.5 }}
              className=" _description_ descriptions text-justify text-sm font-medium text-[#042740] sm:text-[18px]"
            >
              Hello people, my name is Tazlo Zoli Erwin a young passionate about
              Frontend Development and UI/UX Design.
              <m.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="_description_ description descriptions text-justify text-sm font-medium text-[#042740] sm:text-[18px]"
              >
                I live in Romania, Arad for 25 years. I hold bachelor degree as
                I gratuated in Computer Science from the Aurel Vlaicu
                University. On the other way the city is beautiful it’s very
                unique and special for me. I'm interesed to working together in
                the tech field, i’m passionate and dedicated for helping clients
                from all around the world to get grow day by day. My goal is to
                create a fluid and functional user interface. I try to do my
                best day by day to improve my skills in this field. Otherwise I
                am sensible to backend developement but I try to learn and
                improve the technic and my skills on this niche, it’s not
                because I don’t like, it’s because I think it's a lot harder and
                I have a lot more paradigms and patterns to learn. In this
                situation I decide to move forward with the Frontend and UI/UX
                Design side to learn more and improve my skills on the other
                side I like and I’m fully passionate to learn new things in this
                domain. It’s never too late to change something about you and
                with hard work and dedication you will be find the way to get
                where you want in your career. If you are interested for working
                together on your projects, please don’t hesitate me and contact
                me on email@yahoo.com.{" "}
              </m.span>
            </m.p>
          </div>

          <m.div
            className="image-container  mt-20 sm:w-3/5 sm:pt-28 md:w-2/5 lg:w-2/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.89 }}
          >
            <m.img
              src={me}
              alt=""
              className="image1 sepia  "
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
            />
          </m.div>
        </div>

        <div className="svg-container flex justify-center pt-24 pb-24 sm:hidden">
          <svg
            width="96"
            height="89"
            viewBox="0 0 96 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow_down"
          >
            <g clipPath="url(#clip0_85_87)">
              <path
                d="M94.74 41.5799C94.74 39.5399 94 37.7399 92.52 36.1799L88.02 31.6799C86.5 30.1599 84.68 29.3999 82.56 29.3999C80.4 29.3999 78.6 30.1599 77.16 31.6799L59.52 49.2599V7.01995C59.52 4.93995 58.77 3.24995 57.27 1.94995C55.77 0.649948 53.96 -5.34058e-05 51.84 -5.34058e-05H44.16C42.04 -5.34058e-05 40.23 0.649948 38.73 1.94995C37.23 3.24995 36.48 4.93995 36.48 7.01995V49.2599L18.84 31.6799C17.4 30.1599 15.6 29.3999 13.44 29.3999C11.28 29.3999 9.48001 30.1599 8.04001 31.6799L3.54001 36.1799C2.02001 37.6999 1.26001 39.4999 1.26001 41.5799C1.26001 43.6999 2.02001 45.5199 3.54001 47.0399L42.6 86.0999C44 87.5799 45.8 88.3199 48 88.3199C50.16 88.3199 51.98 87.5799 53.46 86.0999L92.52 47.0399C94 45.4799 94.74 43.6599 94.74 41.5799Z"
                fill="#042740"
                className="arr_down"
              />
            </g>
            <defs>
              <clipPath id="clip0_85_87">
                <rect width="96" height="88.32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <m.div
          animate={inView ? "visivle" : "hidden"}
          variants={my_variants}
          exit="hidden"
          transition={{ duration: 2, ease: "easeOut" }}
          ref={ref}
          className="qoutes-container my-qoutes-container flex h-48  w-full items-center justify-center sm:w-2/4"
        >
          <m.p className="qoute  text-center  sm:text-2xl">
            A negative mind will never give you <br /> a positive life.
          </m.p>
        </m.div>

        <div className="big-container   items-center justify-around  pb-20 sm:flex sm:place-items-center lg:flex lg:items-center lg:justify-around">
          <m.div
            className="image-container mt-20 sm:w-3/5 sm:pt-28 md:w-2/5 lg:w-2/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2.29, delay: 1.2 }}
          >
            <m.img
              src={me2}
              alt=""
              className="image1 sepia"
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
            />
          </m.div>

          <div className="text-container  m-4 pt-14 sm:w-4/5 sm:pt-14 lg:w-2/5 ">
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="_description_ descriptions text-justify text-sm font-medium text-[#042740] sm:text-[16px]"
            >
              I like to do calisthenics workout using my bodyweight and doing an
              efficient and much harder exercises using my own bodyweight.
              <m.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="_description_ description descriptions text-justify text-sm font-medium text-[#042740] sm:text-[18px]"
              >
                {" "}
                When I’m feeling tired or something like that i implemented in
                my routine yoga exercises to relax my body and my mind. This is
                a key in my daily routine to avoid for example accidents on my
                joints and muscles I do a lot of flexibility and mobility
                exercises after the workout, this is an important step after
                routine. In 2019 I participeted on Street Workout competition
                near Timisoara it was my first time on official competition. In
                my free time I going out with my friends or I like to read some
                books to keep my mind busy and improve my language skill. One
                hobby that i never miss is going and play football with my
                friends, I’m microbist since I was 8 years old or something like
                that but never mind the important things it’s have fun with your
                friends. Something that I like to add to my workout it’s animal
                flow that keep my body move free it’s necessary to have strength
                and keep my body mind connection active during the flow. It’s
                never too late for start doing some exercises that you like when
                you have free time it’s recommended for your healthy.
              </m.span>
            </m.p>
          </div>
        </div>

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
      </m.div>
    </ThemeProvider>
  );
}

const Title = styled(motion.h1)`
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export default About;
