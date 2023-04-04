import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-gray-900 py-5 flex justify-center  "
    >
      <Link to="/">
        <motion.h1
          variants={zoomIn(0, 0.5)}
          className="text-white text-2xl font-bold hover:scale-110 transition-all duration-500"
        >
          Quiz App
        </motion.h1>
      </Link>
    </motion.header>
  );
};

export default Navbar;
