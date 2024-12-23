import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const courseData = {
  'Technical Skills': [
    'Circuit Analysis',
    'Power Electronics',
    'Digital Systems',
    'Control Systems'
  ],
  'Functional skills': [
    'Project Management',
    'Technical Documentation',
    'System Design',
    'Problem Solving'
  ],
  'Behavioural skills': [
    'Team Collaboration',
    'Communication',
    'Leadership',
    'Time Management'
  ]
};

const Dropdown = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="mb-3 ">
      <motion.button
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.1 }}
        onClick={onToggle}
        className="w-full bg-white py-3  px-10 rounded-lg shadow-sm flex justify-between items-center"
        whileHover={{ backgroundColor: '#f8fafc' }}
      >
        <span className="font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white mt-1 p-4 rounded-lg shadow-sm">
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Courses = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="border mt-10 border-slate-400 px-8 py-6  rounded-xl">
      <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[20px] md:text-[50px] mb-6"
      >
        Courses
        <div className='h-[1px] w-full mb-6 bg-gray-600'></div>
      </motion.h2>
      
      {Object.entries(courseData).map(([title, items]) => (
        <Dropdown
          key={title}
          title={title}
          items={items}
          isOpen={openSection === title}
          onToggle={() => handleToggle(title)}
        />
      ))}
    </div>
  );
};

export default Courses;