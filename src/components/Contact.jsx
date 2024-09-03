import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-3xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter m-8 flex text-gray-500 items-center justify-center gap-4 text-2x cursor-pointer">
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
      </div>
      <p className="text-center tracking-tighter m-10 flex text-gray-500 items-center justify-center gap-4 ">
        Made by Megha
      </p>
    </div>
  );
};

export default Contact;
