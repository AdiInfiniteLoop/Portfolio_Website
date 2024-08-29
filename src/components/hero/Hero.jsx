import { motion } from "framer-motion";
import Contact from "../contact/Contact.jsx";
import "./hero.scss";
import { useState } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      repeatType: "mirror",
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButtonAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const slidertextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 15,
      staggerChildren: 0.1,
    },

    scrollButtonAnimation: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  },
};

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setShowContact(true);
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ADITYA PRADHAN </motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and Pre-Final Year Student
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <motion.a href="https://github.com/AdiInfiniteLoop">
                See the latest works
              </motion.a>
            </motion.button>
            <motion.button variants={textVariants} onClick={handleClick}>
              Contact me {showContact && <Contact />}
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            className="scroll-img"
            animate="scrollButtonAnimation"
            src="scroll.png"
            alt="Scroll image"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidertextVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Creater Coder Developer
      </motion.div>
      <div className="img-container">
        <img
          className="main-hero"
          //   src="/WhatsApp_Image_2024-06-27_at_09.23.33-removebg-preview.png"
          src="naruto.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
