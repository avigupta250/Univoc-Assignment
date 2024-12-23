import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/20/solid";
import { fadeIn, slideIn } from "../utils/animations";
import image from "../assets/image 299.png";
import frame from "../assets/Frame-2232-3.png";

const Hero = () => {
  return (
    <motion.div
      {...fadeIn}
      className="relative flex flex-col md:flex-row h-[200px] md:h-[450px] rounded-b-[40px] overflow-hidden"
      style={{
        backgroundImage: `url(${frame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* First Part */}
      <div className="container mx-auto z-10 px-4 py-6 md:px-6 md:py-12 text-white flex-1 flex flex-col justify-center">
        <motion.div
          {...slideIn}
          className="flex items-center gap-1 md:gap-2 justify-start text-[10px] md:text-sm mb-2"
        >
          <span>Home</span>
          <span>{"›"}</span>
          <span>Integrated Degree Programs</span>
          <span>{"›"}</span>
          <span>Electrical and electronics</span>
        </motion.div>
        <motion.h1
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-4xl font-bold mb-4"
        >
          Electrical and electronics
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-1 md:gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
          ))}
          <span className="text-xs md:text-sm">(4.5)</span>
        </motion.div>
      </div>

      {/* Second Part */}
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={image}
        alt="Engineer working"
        className="absolute z-20 w-[120px] h-[150px] top-10 right-4 md:static md:w-1/2 md:h-full object-contain"
      />
    </motion.div>
  );
};

export default Hero;
