import React, { useState, useEffect } from 'react';
import './PatientForm.css';

const PatientForm = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    medicalHistory: '',
    dateOfAdmission: '',
    emergencyContact: '',
    insuranceDetails: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  useEffect(() => {
    if (patients.length > 0) {
      localStorage.setItem('patients', JSON.stringify(patients));
    }
  }, [patients]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPatients = [...patients];
      updatedPatients[editIndex] = form;
      setPatients(updatedPatients);
      setEditIndex(null);
    } else {
      setPatients([...patients, form]);
    }
    setForm({
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      medicalHistory: '',
      dateOfAdmission: '',
      emergencyContact: '',
      insuranceDetails: '',
    });
  };

  const handleEdit = (index) => {
    setForm(patients[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  return (
    <div className="form-container">
      <h2>{editIndex !== null ? 'Edit Patient' : 'Add Patient'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <textarea
          name="medicalHistory"
          placeholder="Medical History"
          value={form.medicalHistory}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfAdmission"
          value={form.dateOfAdmission}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={form.emergencyContact}
          onChange={handleChange}
        />
        <input
          type="text"
          name="insuranceDetails"
          placeholder="Insurance Details"
          value={form.insuranceDetails}
          onChange={handleChange}
        />
        <button type="submit">
          {editIndex !== null ? 'Update Patient' : 'Add Patient'}
        </button>
      </form>

      <h3>Patient Records</h3>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <strong>{patient.name}</strong> - {patient.age} - {patient.gender}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientForm;
