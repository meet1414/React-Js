import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PatientForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    diagnosis: '',
    contact: '',
    address: '',
    bloodGroup: '',
    admissionDate: ''
  });

  useEffect(() => {
    if (id) {
      const patients = JSON.parse(localStorage.getItem('patients')) || [];
      const patient = patients.find(p => p.id === id);
      if (patient) setFormData(patient);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(val => val === '')) {
      alert('Please fill all fields.');
      return;
    }

    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const newPatient = {
      ...formData,
      id: id || new Date().toISOString()
    };

    let updatedPatients;
    if (id) {
      updatedPatients = patients.map(patient =>
        patient.id === id ? newPatient : patient
      );
    } else {
      updatedPatients = [...patients, newPatient];
    }

    localStorage.setItem('patients', JSON.stringify(updatedPatients));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="mb-3">
        <label>Patient Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input
          type="number"
          name="age"
          className="form-control"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Gender</label>
        <select
          name="gender"
          className="form-control"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Diagnosis</label>
        <input
          type="text"
          name="diagnosis"
          className="form-control"
          value={formData.diagnosis}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Contact Number</label>
        <input
          type="text"
          name="contact"
          className="form-control"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Blood Group</label>
        <input
          type="text"
          name="bloodGroup"
          className="form-control"
          value={formData.bloodGroup}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Admission Date</label>
        <input
          type="date"
          name="admissionDate"
          className="form-control"
          value={formData.admissionDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={() => navigate('/')}
      >
        Cancel
      </button>
    </form>
  );
};

export default PatientForm;
