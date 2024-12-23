import React from 'react';
import { motion } from 'framer-motion';

const formFields = [
  { name: 'fullName', type: 'text', placeholder: 'Full Name*' },
  { name: 'email', type: 'email', placeholder: 'Email Address*' },
  { name: 'phone', type: 'tel', placeholder: 'Enter your mobile number*' },
  { name: 'state', type: 'text', placeholder: 'State*' },
  { name: 'city', type: 'text', placeholder: 'City*' }
];

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg mb-8 shadow-lg"
    >
      <div className="space-y-4">
        {formFields.map((field) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>
        ))}

       

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <textarea
            placeholder="Your Message*"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;