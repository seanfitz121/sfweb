import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 max-w-3xl mx-auto text-gray-300">
        I’m a web developer specializing in custom solutions for businesses. With years of experience in React, Tailwind, and backend integrations, I help businesses establish their online presence efficiently.
      </p>
    </motion.section>
  );
};

export default About;
