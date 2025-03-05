import React from "react";

const clients = ["RestaurantX", "TechCorp", "FreelanceHub", "E-Shop", "FitnessPro"];

const Clients = () => {
  return (
    <section className="py-16 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold">Past Clients</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
        {clients.map((client, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg text-lg font-semibold">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
