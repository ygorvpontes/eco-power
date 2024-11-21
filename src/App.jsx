import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import EcoWallet from "./pages/EcoWallet";
import Navbar from "./components/Navbar"; 
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/eco-wallet" element={<EcoWallet />} />
      </Routes>
    </Router>
  );
}

export default App;
