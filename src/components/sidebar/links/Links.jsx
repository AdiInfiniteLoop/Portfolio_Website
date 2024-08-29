import { motion } from "framer-motion";

//Add feature Exit also with 'Esc'
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemAnimation = {
  closed: {
    y: 0,
    opacity: 0,
  },
  open: {
    y: 50,
    opacity: 1,
  },
};

const Links = () => {
  const linksItems = ["Homepage", "About", "Skills", "Projects", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {linksItems.map((item) => {
        return (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
