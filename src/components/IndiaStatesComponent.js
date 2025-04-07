import React, { useState } from "react";
import Select from "react-select";
import "tailwindcss/tailwind.css";

import Analysis from './Analysis';

const indian_states = [
  "India",
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
].map(state => ({ value: state, label: state }));

const IndiaStatesComponent = (props) => {
  const [selectedState, setSelectedState] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Select</h1>
      <div className="max-w-2xl mb-6">
        <Select
          options={indian_states}
          value={selectedState}
          onChange={handleChange}
          className="shadow-lg rounded-lg border-none focus:ring-4 focus:ring-gray-300"
          styles={{
            control: (base) => ({
              ...base,
              background: "white",
              color: "black", // Ensures the text color is black
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "0.3s",
              '&:hover': { boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" }
            }),
            menu: (base) => ({
              ...base,
              background: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              animation: "fadeIn 0.3s ease-in-out"
            }),
            singleValue: (base) => ({
              ...base,
              color: "black", // Ensures the selected value text color is black
            }),
            option: (base, state) => ({
              ...base,
              color: state.isSelected ? "white" : "black", // White text for selected, black for others
              backgroundColor: state.isSelected ? "#4f46e5" : "white", // Indigo background for selected
              '&:hover': {
                backgroundColor: "#e0e7ff", // Light indigo on hover
                color: "black",
              },
            }),
          }}
        />
      </div>
      {selectedState && (
        <p className="text-lg font-semibold bg-white text-black px-4 py-2 rounded-lg shadow-lg mb-6">
          You selected: {selectedState.label}
        </p>
      )}
      {selectedState && (
        <div>
          <Analysis disasterType={props.disasterType} state={selectedState} />
        </div>
      )}
    </div>
  );
};

export default IndiaStatesComponent;