import React from "react";
import "../components/patientcard.css";

const PatientCard = ({ patient }) => {
  return (
    <div className="patient-card">
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
};

export default PatientCard;
