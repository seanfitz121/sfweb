import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold">Our Services</h2>
      <p className="mt-4">Custom web templates, hosting, and maintenance plans.</p>
      <a href="/contact" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
        Contact Us
      </a>
    </section>
  );
};

export default Services;
