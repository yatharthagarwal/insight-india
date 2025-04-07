import React from "react";
import { useNavigate } from "react-router-dom";

const DisasterButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <button
        onClick={() => navigate("/floods")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Floods
      </button>
      <button
        onClick={() => navigate("/earthquakes")}
        className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Earthquakes
      </button>
      <button
        onClick={() => navigate("/droughts")}
        className="px-6 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
      >
        Droughts
      </button>
      <button
        onClick={() => navigate("/cyclones")}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Cyclones
      </button>
    </div>
  );
};

export default DisasterButtons;
