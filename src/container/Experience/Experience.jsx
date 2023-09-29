import React, { usState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { AppWrap } from "../../wrapper";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <h1 className="head-text">Experience</h1>
      <motion.div className="app__experience-timeline">
        <VerticalTimeline>
          {experiences.map((exp, index) => {
            return (
              <VerticalTimelineElement
                key={`exp-${exp.company}`}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#141414",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #6baa75",
                }}
                iconStyle={{ background: "#aa9aba", color: "#fff" }}
              >
                <div className="app__experience-info">
                  <h3 className="position-title">{exp.position}</h3>
                  <h4 className="company-title">{exp.company}</h4>
                  <h4 className="company-techStack">
                    {" "}
                    {exp.techStack ? "Tech Stack:" : ""}
                  </h4>
                  <span className="techstack">
                    {exp.techStack ?? exp.techStack}
                  </span>
                  <p>{exp.description}</p>

                  <span className="app__experience-date">{exp.year}</span>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default AppWrap(Experience, "experience");
