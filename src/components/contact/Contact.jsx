import { useInView, motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const form = useRef();
  const inView = useInView(ref, { margin: "-100px" });

  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xh0si6i", "template_0ozlh69", form.current, {
        publicKey: "J6muI9ch1XJux2-Y1",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (err) => {
          console.log("Email sending failed...", err);
          setErr(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let &apos;s work together </motion.h1>
        <motion.div variants={variants} className="item">
          <motion.h2 variants={variants}>Mail</motion.h2>
          <motion.span>adityapradhanofficial1712@gmail.com</motion.span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <motion.h2 variants={variants}>Address</motion.h2>
          <motion.span>Mysuru, Karnataka</motion.span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <motion.h2 variants={variants}>Phone Number</motion.h2>
          <motion.span>+91-8159988129</motion.span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phonesvg"
          initial={{ opacity: 1 }}
          animate={{ opacity: inView ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="523"
            height="376"
            viewBox="0 0 523 376"
            strokeWidth={0.2}
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 3 }}
              d="M514.739 15.0506C514.114 11.6554 509.337 9.29012 504.688 10.115L60.507 89.3382C57.6182 89.8546 55.344 91.4579 54.5775 93.5265C53.8109 95.595 54.669 97.8005 56.8198 99.281L170.689 177.761L148.095 278.514C147.213 282.458 152.155 285.903 157.559 285.238L305.311 266.835L445.73 323.816C446.975 324.321 448.36 324.573 449.748 324.573C450.993 324.573 452.238 324.369 453.387 323.959C455.813 323.093 457.485 321.415 457.848 319.484L514.756 16.6033C514.853 16.081 514.834 15.5611 514.739 15.0506ZM78.8341 98.1765L464.909 29.3174L181.861 169.187L78.8341 98.1765ZM301.661 255.364L166.056 272.255L186.481 181.161L481.023 35.6113L301.661 255.364ZM443.265 309.321L318.046 258.507L493.113 44.0167L443.265 309.321Z"
              fill="orange"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 3 }}
              d="M118.033 303.208L79.6676 333.811C76.6432 336.221 76.9145 339.936 80.2658 342.107C81.8258 343.12 83.7854 343.619 85.732 343.619C87.9661 343.619 90.193 342.965 91.8053 341.676L130.171 311.074C133.195 308.664 132.924 304.949 129.572 302.777C126.225 300.609 121.054 300.801 118.033 303.208Z"
              fill="orange"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 3 }}
              d="M48.6047 170.705L10.2712 201.305C7.25088 203.717 7.52219 207.433 10.8776 209.604C12.4376 210.614 14.3931 211.113 16.3405 211.113C18.5787 211.113 20.8015 210.459 22.4179 209.168L60.7513 178.568C63.7717 176.155 63.5004 172.44 60.145 170.269C56.7839 168.1 51.6291 168.292 48.6047 170.705Z"
              fill="orange"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 3 }}
              d="M333.546 325.669L295.213 356.249C292.189 358.659 292.46 362.374 295.811 364.545C297.371 365.558 299.331 366.057 301.277 366.057C303.512 366.057 305.738 365.403 307.351 364.115L345.684 333.535C348.709 331.125 348.437 327.41 345.086 325.239C341.738 323.07 336.567 323.262 333.546 325.669Z"
              fill="orange"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <input type="text" required placeholder="Name" name="user_name" />
          <input type="email" required placeholder="Email" name="user_email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button>See you soon</button>
          {err && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
