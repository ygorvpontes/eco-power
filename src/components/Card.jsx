import React from "react";

function Card({ title, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      {content}
    </div>
  );
}

export default Card;
