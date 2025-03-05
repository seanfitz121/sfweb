import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(ctaRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: ctaRef.current }
    );
  }, []);

  return (
    <section ref={ctaRef} className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
      <h2 className="text-4xl font-bold">Ready to get started?</h2>
      <p className="mt-2 text-lg">Let's build your website today.</p>
      <a href="/contact"
        className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 hover:scale-105"
      >
        Contact Me
      </a>
    </section>
  );
};

export default CTA;
