import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        </li>
        <li>
          <Link to="/devices" className="hover:text-blue-400">Devices</Link>
        </li>
        <li>
          <Link to="/eco-wallet" className="hover:text-blue-400">EcoWallet</Link>
        </li>
        <li>
          <Link to="/energy-consumption" className="hover:text-blue-400">
            Energy Consumption
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
