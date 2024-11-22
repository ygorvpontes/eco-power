import React from "react";

const EnergyConsumption = () => {
  return (
    <div className="bg-gray-100 h-screen p-8">
      <div className="text-xl font-semibold mb-4">Energy Consumption</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg">Consumption Geral</h2>
            <button className="text-gray-500">
              <i className="fas fa-cog"></i>
            </button>
          </div>
          <p className="text-sm text-gray-600">Diagnostics</p>
          <h1 className="text-4xl font-bold">200.000W</h1>
          <p className="text-sm text-gray-500">200.000 contributions in the last year</p>
          <div className="mt-4">
            <div className="bg-blue-200 h-2 rounded-md">
              <div className="bg-blue-500 h-2 rounded-md w-3/4"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">Energy Currently Used</h2>
          <p className="text-sm text-gray-500">January, 2018</p>
          <div className="flex justify-center items-center my-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
                <h1 className="text-xl font-bold">98%</h1>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-xs text-gray-500"></span>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
            Another Action
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg">Activity</h2>
            <button className="text-gray-500">
              <i className="fas fa-cog"></i>
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            {["2021", "2022", "2023", "2024"].map((year) => (
              <button
                key={year}
                className={`px-2 py-1 rounded-md ${
                  year === "2024"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 30 }).map((_, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded ${
                  idx % 5 === 0 ? "bg-blue-500" : "bg-blue-200"
                }`}
              ></div>
            ))}
          </div>
          <button className="mt-4 text-blue-500 underline">
            Show more activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnergyConsumption;
