import React from "react";

function DeviceCard({ device }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={device.imageUrl} alt={device.name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{device.name}</h3>
      <p className="text-sm text-gray-500">{device.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-gray-800">{device.powerUsage} watts</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
          Manage
        </button>
      </div>
    </div>
  );
}

export default DeviceCard;
