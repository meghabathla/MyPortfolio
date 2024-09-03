import React from "react";
import logo1 from "../assets/logo1.jpg";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 fixed right-0 top-0 left-0 z-50">
      <div
        className=" flex flex-shrink-0 items-center 
      "
      >
        <img className="w-12 h-13 ml-8 mx-2" src={logo1} alt="logo" />
      </div>
      <div className="m-8 flex text-gray-300 items-center justify-center gap-4 text-2x cursor-pointer">
        <a
          href="#about"
          className=" hover:text-gray-400 transition duration-300"
        >
          About
        </a>
        <a
          href="#technologies"
          className=" hover:text-gray-400 transition duration-300"
        >
          Technologies
        </a>
        <a
          href="#project"
          className=" hover:text-gray-400 transition duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className=" hover:text-gray-400 transition duration-300"
        >
          Contact
        </a>
        <a
          href="#resume"
          className=" hover:text-gray-400 transition duration-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
