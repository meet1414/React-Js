import React, { useState, useEffect } from "react";
import PatientCard from "./PatientCard";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorageUtils";

const mockPatients = [
  { id: 1, name: "John Doe", age: 30, condition: "Flu" },
  { id: 2, name: "Jane Smith", age: 45, condition: "Diabetes" },
  { id: 3, name: "Samuel Green", age: 27, condition: "Asthma" },
  { id: 4, name: "Lucy Brown", age: 35, condition: "COVID-19" },
  { id: 5, name: "Michael Johnson", age: 50, condition: "Hypertension" },
  { id: 6, name: "Emily Davis", age: 29, condition: "Migraine" },
  { id: 7, name: "Daniel Wilson", age: 40, condition: "Back Pain" },
  { id: 8, name: "Sophia Moore", age: 33, condition: "Allergy" },
];

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCondition, setFilterCondition] = useState("");
  const [sortField, setSortField] = useState("");

  useEffect(() => {
    const storedPatients = getFromLocalStorage("patients");
    if (storedPatients) {
      setPatients(storedPatients);
    } else {
      setPatients(mockPatients);
      saveToLocalStorage("patients", mockPatients);
    }
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleFilter = (e) => setFilterCondition(e.target.value);

  const handleSort = (field) => {
    const sorted = [...patients].sort((a, b) =>
      a[field] > b[field] ? 1 : -1
    );
    setPatients(sorted);
    setSortField(field);
  };

  const filteredPatients = patients
    .filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((patient) =>
      filterCondition ? patient.condition === filterCondition : true
    );

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select onChange={handleFilter} value={filterCondition}>
          <option value="">All Conditions</option>
          {[...new Set(patients.map((p) => p.condition))].map((cond) => (
            <option key={cond} value={cond}>
              {cond}
            </option>
          ))}
        </select>
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("age")}>Sort by Age</button>
      </div>
      <div className="patient-list">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
