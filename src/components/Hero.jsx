import React from "react";
import { HERO_CONTENT } from "../constants";
import MyProfilePhoto from "../assets/MyProfilePhoto.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-40 lg:mb-35">
      <div className="flex flex-wrap lg:p-8">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6  text-4xl lg:text-6xl font-thin tracking-tighter lg:mt-16 "
            >
              Megha Bathla
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-yellow-200 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6  tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-center tracking-tighter  flex text-gray-500 items-center justify-center gap-4 text-2x cursor-pointer"
            >
              <a href="mailto:bathlamegha6@gmail.com">
                {" "}
                <MdEmail />
              </a>
              <a
                href="https://www.linkedin.com/in/meghabathla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/MeghaBathla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://hashnode.com/@meghabathla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHashnode />
              </a>
              <a
                href="https://github.com/meghabathla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg: p-8">
          <div className=" flex justify-center h-80">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className=" rounded-2xl"
              src={MyProfilePhoto}
              alt="Megha Bathla"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
