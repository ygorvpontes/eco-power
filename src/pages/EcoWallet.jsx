import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function EcoWallet() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://api.mockapi.io/api/eco-wallet")
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
        setTransactions(data.transactions);
      })
      .catch((error) => console.error("Error fetching eco wallet data:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Eco Wallet</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <p className="text-xl font-semibold text-gray-800">Current Balance</p>
          <p className="text-3xl font-bold text-green-600">${balance}</p>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        <ul className="space-y-4">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <li key={transaction.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">{transaction.date}</span>
                  <span className={`text-sm font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.type === "credit" ? "+" : "-"} ${transaction.amount}
                  </span>
                </div>
                <p className="text-gray-500">{transaction.description}</p>
              </li>
            ))
          ) : (
            <p>No transactions available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default EcoWallet;
