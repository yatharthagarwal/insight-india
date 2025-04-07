import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisasterButtons from "./components/DisasterButtons";
import Floods from "./components/Floods";
import Earthquake from "./components/Earthquake";
import Droughts from "./components/Droughts";
import Cyclones from "./components/Cyclones";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-center text-xl font-bold p-4">Disaster Analysis</h1>
        <DisasterButtons />
        <Routes>
          <Route path="/floods" element={<Floods />} />
          <Route path="/earthquakes" element={<Earthquake />} />
          <Route path="/droughts" element={<Droughts />} />
          <Route path="/cyclones" element={<Cyclones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
