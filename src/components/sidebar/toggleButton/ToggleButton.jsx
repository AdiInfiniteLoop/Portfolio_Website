import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          stroke="black"
          strokeLinecap="round"
          strokeWidth="3"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        ></motion.path>
        <motion.path
          stroke="black"
          strokeLinecap="round"
          strokeWidth="3"
          variants={{
            open: { d: "" },
            closed: { d: "M 2 9.243 L 20 9.423" },
          }}
        ></motion.path>
        <motion.path
          stroke="black"
          strokeLinecap="round"
          strokeWidth="3"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        ></motion.path>
      </svg>
    </button>
  );
};

export default ToggleButton;
