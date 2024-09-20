import React from "react";
import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="project" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-14 flex flex-wrap lg:justify-center gap-10"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                {" "}
                <img
                  width={400}
                  height={450}
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className=" font-semibold">{project.title}</h6>
                <p className="mb-3 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block rounded bg-neutral-100 px-1 py-1 text-sm font-medium text-purple-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-3 mt-3">
                  <a href={project.live} target="_blank">
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.viewCode}
                    className="text-lg font-bold"
                    target="_blank"
                  >
                    <GoCodeReview />
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
