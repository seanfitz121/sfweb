import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Custom Websites", description: "Tailored designs for businesses." },
  { title: "Fast Hosting", description: "Reliable and secure hosting." },
  { title: "SEO Optimization", description: "Rank higher on Google." },
  { title: "Maintenance Plans", description: "Ongoing support & updates." },
];

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(servicesRef.current, 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: servicesRef.current }
    );
  }, []);

  return (
    <section ref={servicesRef} className="py-16 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
