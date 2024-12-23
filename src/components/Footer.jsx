import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import logo from "../assets/logo-1.png";

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Academics",
      links: ["Programme"],
    },
    {
      title: "Innovation",
      links: ["Student", "Faculty"],
    },
    {
      title: "Other Links",
      links: ["Jobs", "Become A Teacher", "Events"],
    },
  ];

  return (
    <footer className="bg-[#001233] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Description Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          //   viewport={{ once: true }}
          className="mb-8 flex items-center gap-10"
        >
          <img src={logo} alt="UNIVOC" className="h-12" />
          <p className="text-gray-400  mt-4 ">
            "empowering individuals with the skills to thrive in a changing
            world.
            <br />
            univoc skilling to empower bridges talent and opportunity, driving
            innovation and growth for a brighter future."
          </p>
        </motion.div>

        {/* Footer Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <h2 className="text-xl font-semibold text-white">
               About Us
              </h2>
             <h2 className="text-xl mt-3 font-semibold text-white">
               Careers
              </h2>
              <h1 className="text-gray-400 mt-3 flex gap-1 items-center"><span><IoLocationOutline /></span>Address</h1>
              <h1 className="text-gray-400 flex gap-1 items-center"><span><IoMailOutline /></span> hrd@theunivoc.com</h1>
          </motion.div>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              //   viewport={{ once: true }}
              className="flex flex-col space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <div className="text-gray-400 space-y-2">
                {section.links.map((link) => (
                  <p key={link}>{link}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          //   viewport={{ once: true }}
          className=" pt-8 pb-3  border-b-[3px]  border-gray-400"
        >
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                // viewport={{ once: true }}
                className="text-white hover:text-gray-300 text-3xl"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
