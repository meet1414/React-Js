import React from "react";
import PatientList from "./components/PatientList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Patient Management System</h1>
      <PatientList />
    </div>
  );
};

export default App;
