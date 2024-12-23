import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';
import { jobRoles,relatedCourses } from '../../constant';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const CareerSection = () => {
  return (
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* Job Roles Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        
      >
        <motion.h2 
          variants={itemVariants}
          className="text-sm md:text-2xl  mb-6 pb-2 border-b-2 border-gray-600"
        >
          Job Roles
        </motion.h2>
        <motion.ul className="grid grid-cols-2 gap-4">
          {jobRoles.map((role, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-2 text-gray-700"
            >
              <span className="w-1 h-1 bg-black rounded-full"></span>
              <span>{role}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Related Courses Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl   pb-2 border-b-2 border-gray-600"
        >
          Related Courses
        </motion.h2>
        <div className=" ">
          {relatedCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-4 border-b-2 border-black p-4 "
            >
              <div className="w-25 h-20 rounded-xl  overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full  shadow-2xl object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < course.rating ? 'text-yellow-400' : 'text-gray-100'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default CareerSection;