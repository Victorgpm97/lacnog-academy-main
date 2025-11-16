import React from "react";

const FeaturedSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-6 rounded-2xl">
      <h2 className="text-3xl font-bold text-[#FEA723] mb-8 text-left">Noticias Destacadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta principal */}
        <div className="bg-linear-to-b from-cyan-600 to-cyan-400 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
          <div className="mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
              {/* Ícono decorativo */}
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">
              Managing FOIA requests with custom GPTs
            </h3>
          </div>
          <p className="text-sm">
            See how your agency could reduce back-and-forth time on requests.
          </p>
        </div>

        {/* Tarjetas secundarias */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "ChatGPT Fundamentals" },
            { title: "ChatGPT Fundamentals" },
            { title: "Prompting" },
            { title: "Prompting" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 text-white rounded-lg p-4 shadow-md flex items-center justify-center text-center text-sm font-semibold"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
