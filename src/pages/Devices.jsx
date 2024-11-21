import React, { useState, useEffect } from "react";

function Devices() {
  const [devices, setDevices] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const fetchDevices = async () => {
      try {
        
        const response = await fetch("https://673fb7d9a9bc276ec4b96965.mockapi.io/Devices");
        const data = await response.json();
        setDevices(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Erro ao carregar os dispositivos", error);
        setLoading(false); 
      }
    };

    fetchDevices(); 
  }, []); 

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading Devices...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Devices</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <div key={device.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800">{device.name}</h4>
            <p className="text-sm text-gray-500">Power usage: {device.powerUsage}W</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Devices;
