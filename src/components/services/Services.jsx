import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const inview = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      animate={inview && "animate"}
    >
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p>
          I focus on helping others and myself
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Quirky </motion.b>Facts
          </h1>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>About </motion.b>
            Me
          </h1>
          <motion.button whileHover={{ color: "gray" }}>
            <a
              href="https://en.wikipedia.org/wiki/Ghajini_(2008_film)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Who am I <br />
              (Alzheimer ???)
            </a>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Pursuing B.Tech in Computer Science</h2>
          <p>
            I am currently pursuing a Bachelor of Technology (B.Tech) degree in
            Computer Science in NIE, Mysore, which provides a strong foundation
            in computer science principles and practical applications.
          </p>
          <button>
            <a
              href="https://nie.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Proficient in Data Structures and Algorithms</h2>
          <p>
            I have a strong grasp of fundamental data structures like arrays,
            linked lists, stacks, queues, and trees, as well as algorithms for
            sorting, searching, and problem-solving. I regularly practice coding
            problems to enhance my DSA skills.
          </p>
          <button>
            <a
              href="https://github.com/AdiInfiniteLoop/Data-Structures-and-Algorithms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Resources
            </a>
          </button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Learning in Web Development</h2>
          <p>
            I have experience building responsive and user-friendly websites
            using HTML, CSS, JavaScript, and popular frameworks like React. I
            enjoy creating visually appealing designs and implementing
            interactive features.
          </p>
          <button>
            <a
              href="https://github.com/AdiInfiniteLoop"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Projects
            </a>
          </button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sports Enthusiast</h2>
          <p>
            In my free time, I enjoy playing football and cricket. I find these
            sports to be a great way to stay active, relieve stress, and
            collaborate with teammates towards a common goal, which I believe
            translates well to my approach to software development. (I love
            Anime too BTW)
          </p>
          <button>
            <a
              href="https://www.example.com/sports-clubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let &apos;s Connect
            </a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
