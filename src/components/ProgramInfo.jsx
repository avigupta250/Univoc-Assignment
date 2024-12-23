import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/animations';
import Courses from './Courses';
import image from "../assets/image-6.png"


const ProgramInfo = () => {
  return (
    <motion.div 
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="container mx-auto px-20 py-12 grid grid-cols-2 gap-20"
    >
      <motion.div variants={slideIn}>
        <h2 className="text-[50px]  ">About the Program</h2>
        <div className='h-[2px] w-full bg-black'> </div>
        <p className="text-gray-600 leading-relaxed">
        The Electrical and Electronics course covers fundamental and 
advanced topics in electrical engineering and electronics. It 
includes subjects like circuit analysis, electrical machines, power 
systems, signal processing, control systems, and electronics 
devices. Students learn to design and analyze electrical circuits, 
understand the operation of electrical machines and power 
generation, and delve into communication systems, 
microprocessors, and embedded systems. Practical applications 
such as renewable energy systems, electrical instrumentation, and 
automation technologies are also explored. The course prepares 
students for careers in industries like power generation, 
telecommunications, robotics, and electronics manufacturing, 
equipping them with both theoretical knowledge and hands-on 
experience   </p>

        <Courses/>
      </motion.div>
      

      {/* Right side card */}
      <motion.div 
        variants={slideIn}
        className="bg-white mt-10 mb-8 -[480px]  rounded-3xl flex flex-col -14 p-6"
        style={{
          boxShadow: "0 0 15px 10px rgba(59, 130, 246, 0.5)", 
        }}
      >
        <motion.img
        src={image}
        />
                <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 px-5 py-2   mx-auto bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors"
        >
          Start Learning
        </motion.button>




        <div className="space-y-4 mt-5 ">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between items-center"
          >
            <div className='flex w-full  justify-between items-center'>
            <span className="text-gray-600">Duration</span>
            <span className="font-medium text-gray-600">45hrs</span>
            </div>
            <span className='h-[2px] w-full mt-2 bg-slate-400'></span>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between items-center"
          >
            <div className='flex w-full  justify-between items-center'>
            <span className="text-gray-600">Language</span>
            <span className="font-medium text-gray-600">English</span>
            </div>
            <span className='h-[2px] w-full mt-2 bg-slate-400'></span>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between items-center"
          >
            <div className='flex w-full  justify-between items-center'>
            <span className="text-gray-600">Total Credits</span>
            <span className="font-medium text-gray-600">30</span>
            </div>
            <span className='h-[2px] w-full mt-2 bg-slate-400'></span>
          </motion.div>
         
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProgramInfo;