import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";
import Task3 from "./task3/Task3";
import Task4 from "./task4/Task4";
import CohortDetails from "./task5/CohortDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<CohortDetails />} />
      </Routes>
    </div>
  );
};

export default App;
