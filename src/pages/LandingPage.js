import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Clients from "../components/Clients";
import CTA from "../components/CTA";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Clients />
      <CTA />
    </div>
  );
};

export default LandingPage;
