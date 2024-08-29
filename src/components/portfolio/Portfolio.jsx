import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import "./portfolio.scss";
import Contact from "../contact/Contact";

const items = [
  {
    id: 1,
    title: "U&I Trust",
    img: "Screenshot from 2024-08-29 17-38-25.png",
    desc: "The U&I Trust project is a modern front-end application built with React, Vite, and Tailwind CSS. It features Framer Motion for smooth animations and React Icons for customizable iconography. This stack ensures fast development and a responsive, visually appealing user interface.",
    link: "https://github.com/AdiInfiniteLoop/U-I-trust",
  },
  {
    id: 2,
    title: "Worldwise",
    img: "Screenshot from 2024-08-29 17-23-43.png",
    desc: "WorldWise is a web application designed to explore and learn about countries worldwide. It features detailed country information, interactive maps.It combines a user-friendly interface with robust data sourced from reliable APIs. ",
    link: "https://github.com/AdiInfiniteLoop/WorldWise",
  },
  {
    id: 3,
    title: "usePopcorn",
    img: "Screenshot from 2024-08-29 17-13-42.png",
    desc: "usePopcorn is a React application that allows users to search for movies, view movie details, and keep track of the movies they've watched. It utilizes the OMDb API to fetch movie data and provides a user-friendly interface for managing and rating movies.",
    link: "https://github.com/AdiInfiniteLoop/usePopcorn",
  },
  {
    id: 4,
    title: "Capture The Flag",
    img: "WhatsApp Image 2024-08-29 at 17.36.43.jpeg",
    desc: "Land of Eldoria is a unique blend of first-person adventure, real-time strategy, and roleplaying sandbox game. Set in the fantastical world of Eldoria, the game allows you to build your own kingdom, fight epic battles, and explore a vast and mysterious land.n addition to its immersive gameplay, the game incorporates SSH (Secure Shell) for secure remote server management and file transfers, leveraging Linux for its robust command-line interface. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, -140]);

  return (
    <section ref={ref}>
      <div style={{ y }} className="container">
        <div className="wrapper">
          <div className="img-container">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.id < 4 && (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Github Link</button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [renderedItems, setRenderedItems] = useState(0);
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    setRenderedItems(items.length);
  }, []);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1> Portfolio </h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      {renderedItems === items.length && (
        <section id="Contact">
          <Contact />
        </section>
      )}
    </div>
  );
};

export default Portfolio;
