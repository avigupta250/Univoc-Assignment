import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo-1.png";
import { FiChevronDown, FiBook, FiCode, FiBriefcase, FiTrendingUp } from 'react-icons/fi';



import { useState } from 'react';

import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const menuItems = [
  { icon: <FiBook />, label: 'Courses', description: 'Browse our course catalog' },
  { icon: <FiCode />, label: 'Development', description: 'Learn programming skills' },
  { icon: <FiBriefcase />, label: 'Career Paths', description: 'Explore career opportunities' },
  { icon: <FiTrendingUp />, label: 'Trending', description: 'Popular learning paths' },
];


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Logo = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} alt="UNIVOC" className="h-12" />
    </motion.div>
  );

  const SearchBar = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex-1 max-w-xl mx-4"
    >
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="What do you want to learn today"
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
      />
    </motion.div>
  );



  const AuthButtons = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center justify-end space-x-4"
    >
      <button className="text-gray-700 border border-blue-600 rounded-full px-4 py-2 hover:text-gray-900 transition-colors">
        Sign in
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        Register for free
      </button>
    </motion.div>
  );

  const MobileMenu = () => (
    <div className="lg:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 space-y-4"
        >
          <SearchBar />
          <ExploreButton />
          <div className="flex flex-col space-y-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Register for free
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );

  return (
    <nav className="pb-10   border border-b-0 rounded-t-lg border-blue-700  shadow-sm py-4">
      <div className="  mx-auto px-10 h-16">
        <div className="flex gap-8 items-center justify-between h-full">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden  lg:flex items-center flex-1">
            <ExploreButton />
            <SearchBar />
            
          </div>
          <AuthButtons />

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};







const ExploreButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-4 py-2 rounded-full bg-white hover:bg-gray-50 transition-colors"
      >
        <span>Explore</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="text-blue-500 mt-1">{item.icon}</div>
                <div>
                  <div className="font-medium text-gray-900">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};















const Navbarrr = () => {
  return (
    
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="pb-10   border border-b-0 rounded-t-lg border-blue-700  shadow-sm p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
         <img src={logo} alt="UNIVOC" className="h-8" />
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-blue-600">Explore</button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign in
          </button>
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Register for free
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;