import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { AppWrap } from "../../wrapper";

import "./Work.scss";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  return (
    <>
      <h1 className="head-text">Projects</h1>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <div className="div-text" style={{ marginTop: 10 }}>
                {work.description}
                <div className="app__flex app__work-links">
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    title="View Project"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye caption="View Site" />
                    </motion.div>
                  </a>
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    title="View Code"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              </div>
              <div className="app__work-tag">
                {work.tags.map((tag, index) => (
                  <p className="work-tag" key={`work-${tag}-${index}`}>
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "projects");
