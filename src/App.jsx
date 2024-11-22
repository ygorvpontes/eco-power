import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import EcoWallet from "./pages/EcoWallet";
import EnergyConsumption from "./pages/EnergyConsumption";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/eco-wallet" element={<EcoWallet />} />
        <Route path="/energy-consumption" element={<EnergyConsumption />} />
      </Routes>
    </Router>
  );
}

export default App;
