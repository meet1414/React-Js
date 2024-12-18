import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(data);
  }, []);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
  };

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">Add Patient</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>
                <Link to={`/view/${patient.id}`} className="btn btn-info btn-sm">View</Link>
                <Link to={`/edit/${patient.id}`} className="btn btn-warning btn-sm mx-2">Edit</Link>
                <button onClick={() => deletePatient(patient.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
