import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: heroRef.current }
    );
  }, []);

  return (
    <section ref={heroRef} className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-extrabold">Professional Web Development</h1>
      <p className="mt-4 text-lg">Custom templates, hosting & maintenance</p>
      <a href="/contact" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Get Started
      </a>
    </section>
  );
};

export default Hero;
