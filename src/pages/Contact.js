import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/submit-form/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 w-1/2">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"/>
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"/>
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"></textarea>
        <button type="submit" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
