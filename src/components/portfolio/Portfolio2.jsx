import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Project 1 usepop",
    img: "people.webp",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laborum ex ullam. Officia, exercitationem a aut non cum, maiores iste aperiam autem voluptatibus qui cupiditate?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
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
            <button>See Github Link</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        {/* <h1>Featured Works</h1> */}
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
