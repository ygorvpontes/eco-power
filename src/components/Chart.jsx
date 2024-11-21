import React from "react";

function Chart({ type }) {
  if (type === "bar") {
    return (
      <div className="w-full h-16 bg-blue-200 rounded-full relative">
        <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
      </div>
    );
  }
  if (type === "circle") {
    return (
      <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
          99%
        </div>
      </div>
    );
  }
  return <div className="w-0 h-0"></div>;
}

export default Chart;
