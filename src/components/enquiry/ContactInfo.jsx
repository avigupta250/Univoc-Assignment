import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Have More Questions?</h2>
      <p className="mb-8">Reach out to us. Our support team is to assist you.</p>
      
      <div className="space-y-4">
        <motion.a
          href="mailto:Hrd@Theunivoc.Com"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-lg"
        >
          <EnvelopeIcon className="h-6 w-6" />
          Hrd@Theunivoc.Com
        </motion.a>
        
        <motion.a
          href="tel:+918448373884"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-lg"
        >
          <PhoneIcon className="h-6 w-6" />
          +91 84483 73884
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactInfo;