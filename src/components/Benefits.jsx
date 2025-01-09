import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { benefits } from '../../constant';



const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + benefits.length) % benefits.length;
    const nextIndex = (currentIndex + 1) % benefits.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  return (
    <div className=" mt-5">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[20px] md:text-[50px] flex flex-col border-b-2  border-gray-400 md:mb-12 text-center"
        >
          Benefits
           </motion.h2>
        
        <div className="relative  overflow-hidden">
          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="z-10 p-2 rounded-full bg-blue-400 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white hover:text-blue-400" />
            </motion.button>

            <div className="relative w-[1200px] h-[300px] mx-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {getVisibleCards().map((index, i) => {
                    const isCenter = i === 1;
                    return (
                      <motion.div
                        key={benefits[index].title}
                        initial={{ 
                          x: 1000,
                          scale: isCenter ? 1.1 : 0.8,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: (i - 1) * 300,
                          scale: isCenter ? 1.1 : 0.8,
                          opacity: 1,
                          zIndex: isCenter ? 10 : 0
                        }}
                        exit={{ 
                          x: -1000,
                          scale: isCenter ? 1.1 : 0.8,
                          opacity: 0 
                        }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        className={`gradient-animation absolute bg-blue-400 rounded-xl shadow-lg p-4
                          ${isCenter ? 'w-50 md:w-64' : 'w-50 md:w-64 opacity-50'}
                        `}
                      >
                        <div className={` mb-4 ${isCenter ? 'scale-110' : ''}`}>
                          <motion.img src={benefits[index].icon} className='text-white w-[50px] px-3 ' alt="Icon"/>
                         
                        </div>
                        <h3 className=" md:text-xl text-white  font-semibold mb-2">{benefits[index].title}</h3>
                        <p className="text-[12px] md:text-[20px] text-gray-200">{benefits[index].description}</p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="z-10 p-2 rounded-full bg-blue-400 shadow-lg hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-6 w-6 text-white hover:text-blue-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;