import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { GlobalStyles } from "../styled/GlobalStyles";
import { lighTheme, darkTheme } from "../styled/theme";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import Useoverflowhidden from "../hooks/Useoverflowhidden";
import me3 from "../images/me3.png";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  // last things i want to take the theme variable from the store so i use the useSelector hook;
  const { theme } = useSelector((state) => state.dark_theme);
  const checkCurrentTheme = theme === "light" ? lighTheme : darkTheme;
  console.log(theme);

  const hidden = {
    y: 200,
  };

  const show = {
    y: 0,
    transition: { delay: 1.2, duration: 0.8, ease: "easeOut" },
  };
  Useoverflowhidden();
  return (
    <ThemeProvider theme={checkCurrentTheme}>
      <GlobalStyles />
      <motion.div
        className="home_page home  h-screen overflow-y-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ oapcity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <Navbar />

        <div className=" title1 h-1/5 w-full pt-24 sm:pt-10 ">
          <Hide>
            <motion.h2
              initial={hidden}
              animate={show}
              className=" title text-center text-lg  text-[23px] font-medium  text-[#042740] lg:text-center lg:text-[28px] "
            >
              Find your inspiration
            </motion.h2>
          </Hide>
        </div>
        <div className="hero grid place-items-center ">
          <div className="content sm:mb-[28em]">
            <div className="hero-svg  ">
              <svg
                className="svg-elipse"
                viewBox="0 0 877 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_366_3)">
                  <g filter="url(#filter0_d_366_3)">
                    <path
                      d="M68.5141 62.7143C114.226 9.95078 200.463 4.72941 261.13 51.052C321.797 97.3746 333.922 177.7 288.21 230.463C242.499 283.227 209.337 30.4959 95.594 242.126C34.9267 195.803 22.8026 115.478 68.5141 62.7143Z"
                      fillOpacity="0.7"
                      shapeRendering="crispEdges"
                      className="svg-elipse"
                    />
                  </g>
                  <motion.path
                    d="M77.037 258V244.639L96.1236 240.106V121.292L77.037 116.759V103.398H195.613V148.252H179.389L173.424 121.531H141.454L130.002 123.201V170.679H154.338L159.587 154.217H172.231V206.943H159.587L154.338 188.811H130.002V238.913C132.388 239.231 134.774 239.47 137.16 239.629C139.705 239.788 142.409 239.868 145.272 239.868H175.81L182.013 210.999H197.76V258H77.037ZM267.439 258V244.878L280.8 242.731V240.583L222.347 158.75L204.215 152.546V139.663H269.825V152.785L256.226 154.694V157.08L314.678 238.913L331.856 244.878V258H267.439ZM203.737 258V244.878L219.245 241.538L254.078 198.593L265.769 214.578L245.251 239.868V242.015L258.85 244.878V258H203.737ZM281.754 196.923L271.018 181.176L290.582 157.318V154.932L278.175 152.785V139.663H329.47V152.785L315.871 155.887L281.754 196.923ZM332.522 297.366V284.244L348.984 280.904V160.42L329.659 156.602V142.765L371.649 137.277L378.091 148.252L379.523 148.491C383.976 145.15 389.304 142.367 395.508 140.14C401.711 137.754 407.755 136.561 413.64 136.561C427 136.561 437.339 141.174 444.656 150.399C451.972 159.624 455.63 172.587 455.63 189.288C455.63 203.126 453.404 215.294 448.95 225.791C444.497 236.289 438.293 244.48 430.341 250.365C422.547 256.25 413.401 259.193 402.904 259.193C398.609 259.193 394.315 258.477 390.02 257.046C385.726 255.455 381.988 253.387 378.807 250.843L378.33 252.035L380.477 254.183V280.427L404.335 283.767V297.366H332.522ZM395.03 240.822C404.733 240.822 411.572 237.482 415.549 230.802C419.684 224.121 421.752 212.987 421.752 197.4C421.752 182.767 420.002 172.508 416.503 166.623C413.004 160.579 406.96 157.557 398.371 157.557C395.349 157.557 392.247 157.875 389.066 158.511C386.044 158.988 383.181 159.863 380.477 161.135V237.72C382.545 238.675 384.771 239.47 387.157 240.106C389.702 240.583 392.326 240.822 395.03 240.822ZM464.611 258V244.878L483.459 241.538V114.373L464.134 110.556V96.7181L506.124 91.2307L514.952 94.5709V241.538L531.653 244.878V258H464.611ZM596.916 261.34C583.396 261.34 572.581 258.954 564.469 254.183C556.357 249.411 550.472 242.492 546.814 233.426C543.315 224.201 541.565 213.306 541.565 200.74C541.565 192.469 542.678 184.517 544.905 176.882C547.132 169.088 550.631 162.169 555.403 156.125C560.174 149.922 566.457 145.071 574.251 141.572C582.044 137.913 591.429 136.084 602.403 136.084C615.128 136.084 625.387 138.629 633.181 143.719C641.133 148.65 646.939 155.569 650.597 164.476C654.255 173.383 656.085 183.642 656.085 195.253C656.085 203.683 655.051 211.874 652.983 219.827C651.074 227.78 647.814 234.937 643.201 241.299C638.748 247.502 632.703 252.433 625.069 256.091C617.593 259.591 608.209 261.34 596.916 261.34ZM600.972 242.254C607.493 242.254 612.185 240.265 615.048 236.289C618.07 232.154 619.979 226.746 620.774 220.065C621.729 213.385 622.206 206.148 622.206 198.354C622.206 188.016 621.649 179.745 620.536 173.542C619.422 167.18 617.275 162.567 614.094 159.704C610.913 156.682 606.141 155.171 599.779 155.171C592.781 155.171 587.532 156.682 584.033 159.704C580.533 162.567 578.227 167.18 577.114 173.542C576 179.904 575.444 188.175 575.444 198.354C575.444 207.898 576 215.93 577.114 222.451C578.227 228.972 580.613 233.903 584.271 237.243C587.929 240.583 593.496 242.254 600.972 242.254ZM667.602 258V244.878L686.45 241.538V161.613L667.602 157.795V143.957L709.115 137.039L717.227 151.831C719.295 149.922 721.919 147.775 725.1 145.389C728.44 143.003 731.86 140.935 735.359 139.186C739.018 137.436 742.199 136.561 744.903 136.561C748.879 136.561 752.06 137.595 754.446 139.663C756.832 141.572 758.025 145.071 758.025 150.161C758.025 153.183 757.309 156.364 755.877 159.704C754.446 163.044 752.537 165.828 750.151 168.054L732.735 162.806C730.985 162.169 729.395 161.772 727.963 161.613C726.691 161.294 725.498 161.135 724.384 161.135C723.112 161.135 721.919 161.294 720.806 161.613C719.851 161.931 718.897 162.249 717.943 162.567V240.822L744.187 244.639V258H667.602ZM822.269 260.863C810.499 260.863 800.319 259.034 791.73 255.376C783.3 251.558 776.699 245.276 771.928 236.528C767.156 227.78 764.77 216.009 764.77 201.217C764.77 187.539 767.156 175.928 771.928 166.384C776.858 156.682 783.539 149.286 791.969 144.196C800.558 139.106 810.339 136.561 821.314 136.561C830.699 136.561 838.413 138.072 844.457 141.094C850.66 143.957 855.432 147.775 858.772 152.546C862.271 157.318 864.657 162.487 865.929 168.054C867.361 173.621 868.076 179.109 868.076 184.517C868.076 192.787 867.202 198.195 865.452 200.74C863.702 203.285 860.919 204.557 857.102 204.557H798.649C798.808 212.033 799.842 218.475 801.75 223.883C803.659 229.131 806.84 233.108 811.294 235.812C815.906 238.516 822.189 239.868 830.142 239.868C839.844 239.868 847.24 238.993 852.33 237.243C857.42 235.494 860.203 234.46 860.68 234.142L865.452 244.162C864.816 244.798 862.669 246.469 859.01 249.172C855.352 251.876 850.421 254.501 844.218 257.046C838.174 259.591 830.858 260.863 822.269 260.863ZM798.649 189.05L834.913 187.141C835.391 184.278 835.629 181.654 835.629 179.268C835.629 171.474 834.595 165.748 832.528 162.09C830.619 158.272 826.404 156.364 819.883 156.364C814.316 156.364 810.021 157.795 806.999 160.658C803.977 163.521 801.83 167.418 800.558 172.349C799.444 177.28 798.808 182.846 798.649 189.05Z"
                    fill="#042740"
                    className="svg_title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 10 }}
                    transition={{ ease: "easeOut", duration: 3 }}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_366_3"
                    x="38.6774"
                    y="19.4565"
                    width="279.369"
                    height="226.944"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.13725" />
                    <feGaussianBlur stdDeviation="1.06863" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_366_3"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_366_3"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_366_3">
                    <rect width="877" height="300" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div>
              <p className="pl-16 pr-16 text-[18px] font-medium sm:pl-20  sm:text-justify sm:text-[20px]">
                “Learning to write programs stretches your mind, and helps you
                think better, creates a way of thinking about things that I
                think is helpful in all domains.” - Bill Gates
              </p>
              <div className="box-describe-me flex-col items-center pl-16 sm:pl-20">
                <Link to="/contact">
                  <button className="button button_bg">Get in touch !</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-image h-full ">
            <img src={me3} className="img min-h-[800px] w-full" alt="" />
          </div>
        </div>

        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

const Hide = styled.div`
  overflow: hidden;
`;

export default Home;
