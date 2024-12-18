import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PatientView = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const foundPatient = patients.find(p => p.id === id);
    setPatient(foundPatient);
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div>
      <h3>Patient Details</h3>
      <ul>
        <li><strong>Name:</strong> {patient.name}</li>
        <li><strong>Age:</strong> {patient.age}</li>
        <li><strong>Gender:</strong> {patient.gender}</li>
        <li><strong>Diagnosis:</strong> {patient.diagnosis}</li>
        <li><strong>Contact Number:</strong> {patient.contact}</li>
        <li><strong>Address:</strong> {patient.address}</li>
        <li><strong>Blood Group:</strong> {patient.bloodGroup}</li>
        <li><strong>Admission Date:</strong> {patient.admissionDate}</li>

      </ul>
    </div>
  );
};

export default PatientView;
