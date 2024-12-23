import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import image from "../../assets/Frame-2232-8.png"

const EnquirySection = () => {
  return (
    <div className=" bg-url() bg-blue-600 "
    style={{ backgroundImage: `url(${image})` }}>
     

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default EnquirySection;