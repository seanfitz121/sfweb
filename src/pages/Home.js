import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold">SFWeb</h1>
      <p className="text-lg mt-4">Professional Website Templates & Hosting</p>
      <a href="/services" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-500 transition">
        View Services
      </a>
    </section>
  );
};

export default Home;
