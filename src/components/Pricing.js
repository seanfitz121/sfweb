import React from "react";

const pricingPlans = [
  { title: "Basic", price: "$99", features: ["1 Page Website", "Basic Hosting", "Email Support"] },
  { title: "Standard", price: "$299", features: ["5 Page Website", "SEO Optimization", "Priority Support"] },
  { title: "Premium", price: "$499", features: ["E-commerce Site", "Custom Design", "Full Maintenance"] },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold">Pricing</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 px-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} 
               className="p-6 bg-gray-700 rounded-lg shadow-lg w-80 transform transition duration-500 hover:scale-105 hover:bg-gray-600">
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="mt-2 text-3xl font-bold">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
            <a href="/contact" className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition">
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
