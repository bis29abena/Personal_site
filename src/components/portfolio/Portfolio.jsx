import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "./portfolio.css";

const items = [
  {
    id: 1,
    img: "/images/p1.jpg",
    title: "Student Loan Trust Fund Application System",
    desc: "A web application for students to apply for student loan trust fund. It is a full stack application built with HTML, CSS, JavaScript, .NetCore, and SQL. It is currently in use by the Student Loan Trust Fund.",
    link: "https://www.sltf.gov.gh/",
  },
  {
    id: 2,
    img: "/images/p2.jpg",
    title: "Student Loan Employers Portal",
    desc: "A web application for employers to manage their student loan trust fund. It is a full stack application built with Vue.js, .NetCore, and SQL. It is currently in use by the Student Loan Trust Fund. This is for employers to manage their employees loan",
    link: "https://employer.sltf.gov.gh/login",
  },
  {
    id: 3,
    img: "/images/p3.jpg",
    title: "STI Information Managagement System",
    desc: "A web application for the Minitry of Environment, Science and Technology. It is a full stack application built with React, .NetCore, and SQL. It is currently in use by the Minitry of Environment, Science and Technology.",
    link: "https://stimis.mesti.gov.gh/",
  },
  {
    id: 4,
    img: "/images/p4.jpg",
    title: "STIMIS Dashboard",
    desc: "A dashboard for the Minitry of Environment, Science and Technology. It is a full stack application built with .NetCore, and SQL. It is currently in use by the Minitry of Environment, Science and Technology. It used to manage the Information of the Minitry of Environment, Science and Technology.",
    link: "https://stimis.mesti.gov.gh:8008/",
  },
  {
    id: 5,
    img: "/images/p5.jpg",
    title: "No Fees Stress Policy",
    desc: "As part of the Government of Ghana’s efforts to enhance access to higher education and reduce the financial burden on newly admitted tertiary students, the Students Loan Trust Fund, under the Ministry of Education, has launched this online portal for first-year students of public tertiary institutions in Ghana to register for financial support from government.",
    link: "https://nofeesstress.sltf.gov.gh/",
  },
];


const imgVariant = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariant = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItems = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariant}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariant}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariant}>{item.title}</motion.h1>
        <motion.p variants={textVariant}>{item.desc}</motion.p>
        <motion.a variants={textVariant} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

function Portfolio() {
  const [containerDistance, setContainerDistance] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTransalte = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTransalte }}>
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        {items.map((item) => (
          <ListItems item={item} key={item.id} />
        ))}
      </motion.div>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Portfolio;
