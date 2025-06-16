import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AddEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
    salary: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', form);
      navigate('/');
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4" style={{ maxWidth: '600px' }}>
  {/* <h2>{id ? 'Edit' : 'Add'} Employee</h2> */}
  <h2>Add Employee</h2>
  <div className="mb-3">
    <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" required />
  </div>
  <div className="mb-3">
    <input name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Email" required />
  </div>
  <div className="mb-3">
    <input name="position" value={form.position} onChange={handleChange} className="form-control" placeholder="Position" required />
  </div>
  <div className="mb-3">
    <input name="department" value={form.department} onChange={handleChange} className="form-control" placeholder="Department" />
  </div>
  <div className="mb-3">
    <input type="number" name="salary" value={form.salary} onChange={handleChange} className="form-control" placeholder="Salary" required />
  </div>
  <button type="submit" className="btn btn-success"> Employee</button>
</form>

  );
};

export default AddEmployee;
