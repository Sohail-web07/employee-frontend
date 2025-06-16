import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const res = await api.get('/');
      setEmployees(res.data.data);
    } catch (err) {
      console.error('Error fetching employees:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      getEmployees();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Employee List</h2>
        <Link to="/add" className="btn btn-primary">➕ Add Employee</Link>
      </div>
      <div className="row">
        {employees.map(emp => (
          <div className="col-md-4 mb-3" key={emp._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{emp.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {emp.email}<br />
                  <strong>Position:</strong> {emp.position}<br />
                  <strong>Department:</strong> {emp.department}<br />
                  <strong>Salary:</strong> ₹{emp.salary}
                </p>
                <div className="d-flex justify-content-between">
                  <Link to={`/edit/${emp._id}`} className="btn btn-sm btn-warning">✏️ Edit</Link>
                  <button onClick={() => handleDelete(emp._id)} className="btn btn-sm btn-danger">🗑️ Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
