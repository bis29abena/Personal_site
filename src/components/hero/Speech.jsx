import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

function Speech() {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Coding turns ideas into reality — start small, build big, change the world.",
            1000,
            "Every line of code is a step toward solving real-world problems.",
            1000,
            "Coding is not just about writing code; it's about problem-solving, innovation, and creating something meaningful.",
            1000,
            "Learn to code, and you gain the power to shape tomorrow’s technology.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src={`/Personal_site/images/man.png`} alt="man" srcset="" />
    </motion.div>
  );
}

export default Speech;
