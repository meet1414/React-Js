import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import PatientForm from './Component/PatientForm';
import PatientView from './Component/PatientView';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1>Patient Management System</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<PatientForm />} />
          <Route path="/edit/:id" element={<PatientForm />} />
          <Route path="/view/:id" element={<PatientView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
