import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">Hi, I'm Neha!</h1>
              <p className="p-text">
                I'm a passionate<span> Frontend Developer</span> and designer. I
                love creating beautiful, responsive websites using modern
                techstacks like
                <span> ReactJs </span> and<span> Vue.js</span>.
              </p>

              <a className="app__resume" href={images.Resume} download>
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.heroImage} alt="hero" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
