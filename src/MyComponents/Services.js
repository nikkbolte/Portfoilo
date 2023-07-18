// Services.js
import React, { useContext } from "react";
import { themeContext, ThemeProvider } from "../Context";
import "./ServicesStyles.css";
import Card from "./Scard";
import Design from "../assets/Designer1.jpg";
import Developer from "../assets/Developer1.jpg";
import Freelancer from "../assets/freelancer1.jpg";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";

const Services = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  // transition
  const transition = {
    duration: 3,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <h2>Services</h2>
        <p>
          I may not be Perfect , but Consistency and Smartwork will
          <br />
          reflect on my work ....!!!!
        </p>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "40rem" }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card
            emoji={Design}
            heading={"Designer"}
            detail={
              "Design, Corel, Photoshop, Adobe Illustrator, Canva. I specialize in creating visually appealing designs for a variety of purposes, including marketing materials, social media graphics, logos, and more."
            }
            color="rgba(0, 0, 255, 0.45)"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-5rem", top: "7rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={Developer}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express. I am a skilled web developer who can build interactive and responsive websites and web applications using modern web technologies."}
            color="rgba(255, 0, 0, 0.45)"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "16rem", left: "-40rem" }}
          whileInView={{ left: "-34rem" }}
          transition={transition}
        >
          <Card
            emoji={Freelancer}
            heading={"Freelancer"}
            detail={
              "Works along Open-Source Projects, free-lancing & many more. I have experience working with various open-source projects and also take up freelance projects to offer my skills to a wider audience."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Services />
    </ThemeProvider>
  );
};

export default App;
