import React from "react";
import { AppWrap } from "../../wrapper";

import { motion } from "framer-motion";
import { data } from "../../constants";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="app__skills">
      <h1 className="head-text">Skills</h1>
      <div className="app__skillSection">
        {data.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__skillSection-item"
            key={skill.name + index}
          >
            {skill.icon}
            <h2 className="skill__text">{skill.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
