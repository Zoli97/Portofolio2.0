import React from "react";
import leaf from "../images/leaf.jpg";
import trees from "../images/trees.jpg";
import leaf3 from "../images/leaf3.jpg";
import forest4 from "../images/forest4.jpg";
import { Image } from "../components/Image";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/FixedBG.css";
import { useEffect } from "react";
import styled from "styled-components";

const MyTitle = styled.h4`
  font-weight: 800;
  font-size: 3em;
  line-height: 2em;
  color: white;
`;

const MySpan = styled(m.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const MyWord = styled(m.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

export const FixedBackgrounds = () => {
  const line1 = "Keep Nature Wild";
  const line2 = "  Keep Nature Safe";
  const line3 = " Keep Nature Beatiful";
  const line4 = " Keep Nature intact";

  const title = {
    fontWeight: "800",
    fontSize: "3em",
    lineHeight: "2em",
    color: "white",
  };
  const content = {
    fontSize: "1.15em",
    lineHeight: "1.2em",
  };
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  //split the text into letters
  const controls = useAnimation();

  //useInView hook trigger the aniamtion only once the text is in view provide me nice reveal animation.
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const charactersAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },

    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    if (!inView) {
      controls.stop("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="">
      <div className="container1 py-12 " style={container}>
        <div>
          <m.p
            className="constrain mb-4 text-center text-sm  sm:text-[18px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={content}
          >
            Discover the mother nature down below.
          </m.p>
        </div>
      </div>

      <Image src={leaf} alt="Space Port Background" height="50vh" fixed darken>
        <MyTitle
          aria-label={line1}
          role="heading"
          className="text-center text-3xl sm:text-7xl"
        >
          {line1.split(" ").map((word, index) => {
            return (
              <MyWord
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={controls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <MySpan
                      aria-hidden="true"
                      key={index}
                      variants={charactersAnimation}
                    >
                      {character}
                    </MySpan>
                  );
                })}
              </MyWord>
            );
          })}
        </MyTitle>
      </Image>

      <div className="container1 py-12 " style={container}>
        <m.p
          className="constrain  mb-4 text-center text-sm sm:text-[18px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.2, delay: 0.8 }}
          style={content}
        >
          Our beatiful and wild nature.
        </m.p>

        <m.p
          className="constrain text-center text-sm  sm:text-[18px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={content}
        >
          Everything is green here.
        </m.p>
      </div>

      <Image src={leaf3} alt="Space Port Background" height="50vh" fixed darken>
        <m.h4
          className="text-center text-3xl sm:text-7xl"
          style={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: -5 }}
          transition={{ ease: "easeOut", duration: 4.5, delay: 1.4 }}
        >
          {line2}
        </m.h4>
      </Image>

      <div className="container1 py-12 " style={container}>
        <m.p
          className="constrain mb-4 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={content}
        >
          Get lost in the magical forest.
        </m.p>
      </div>

      <Image src={trees} alt="Space Port Background" height="50vh" fixed darken>
        <m.h4
          className="text-center text-3xl sm:text-7xl"
          style={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 5 }}
          transition={{ ease: "easeOut", duration: 4.5, delay: 2.8 }}
        >
          {line3}
        </m.h4>
      </Image>

      <div className="container1 py-12 " style={container}>
        <p className="constrain mb-4 text-center" style={content}>
          The nature is vital to our existence on earth.
        </p>
        <p className="constrain mb-4 text-center" style={content}>
          Look deep into the forest.
        </p>
      </div>

      <Image
        src={forest4}
        alt="Space Port Background"
        height="50vh"
        fixed
        darken
      >
        <m.h4
          className="text-center text-3xl sm:text-7xl"
          style={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: -5 }}
          transition={{ ease: "easeOut", duration: 4.5, delay: 3.8 }}
        >
          {line4}
        </m.h4>
      </Image>
    </section>
  );
};
