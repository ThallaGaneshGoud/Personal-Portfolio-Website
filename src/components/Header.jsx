import React from "react";
import resumeLogo from "../assets/icons/resumeLogo.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <img
            src={resumeLogo}
            alt="Logo"
            className="w-14 h-14 object-contain hover:rotate-12 transition-transform duration-300"
          />
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-bold font-serif">RESUME</h1>
            <h2 className="text-sm md:text-lg font-medium tracking-wide">GENERATOR</h2>
          </div>
        </div>

        <p className="text-white text-sm mt-4 md:mt-0">&copy; Thalla GaneshGoud</p>
      </div>
    </motion.div>
  );
}

export default Header;
