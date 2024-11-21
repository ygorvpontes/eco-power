import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Navbar from "../components/Navbar";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const data = {
    labels: ["Device 1", "Device 2", "Device 3", "Device 4"], 
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: [25, 40, 30, 20], 
        backgroundColor: "rgba(75, 192, 192, 0.6)", 
        borderColor: "rgba(75, 192, 192, 1)", 
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      
      

      <div className="max-w-7xl mx-auto p-6">
        
        <div className="text-3xl font-bold text-gray-800 mb-8">Dashboard</div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Energy Consumption</h3>
          <Bar data={data} options={{ responsive: true }} />
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-gray-800">Device 1</h4>
            <p className="text-sm text-gray-500">Power usage: 25W</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
                Manage
              </button>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-gray-800">Device 2</h4>
            <p className="text-sm text-gray-500">Power usage: 40W</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
                Manage
              </button>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-gray-800">Device 3</h4>
            <p className="text-sm text-gray-500">Power usage: 30W</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
                Manage
              </button>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <h4 className="text-xl font-semibold text-gray-800">Device 4</h4>
            <p className="text-sm text-gray-500">Power usage: 20W</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
                Manage
              </button>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Total Energy Consumption</h4>
          <p className="text-3xl font-bold text-gray-900">115 kWh</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
