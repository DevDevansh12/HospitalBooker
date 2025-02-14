import React from "react";

const StatsCard = ({ person, size }) => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-80 h-80 flex flex-col items-center justify-center bg-white shadow-lg rounded-full border border-gray-200">
        <span className="text-3xl font-bold text-[#125774] mb-5">{person}</span>
        <span className="text-gray-500 font-semibold text-3xl text-center">
          {size}+
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
