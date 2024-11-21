import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#0d233a] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">EcoApp</div>
        <div className="flex space-x-12 text-lg">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/devices" className="hover:text-gray-300">Devices</Link>
          <Link to="/eco-wallet" className="hover:text-gray-300">Eco Wallet</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
