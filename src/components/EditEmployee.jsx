import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const EditEmployee = () => {
  const { id } = useParams(); // ✅ Fix: get ID from route
  const navigate = useNavigate(); // ✅ For redirect after update

  const [form, setForm] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
    salary: ''
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await api.get(`/${id}`);
        console.log('Loaded employee:', res.data);
        setForm(res.data.data); // Or res.data if your API returns plain object
      } catch (err) {
        console.error('Error loading employee:', err);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${id}`, form);
      navigate('/'); // Redirect to home
    } catch (err) {
      console.error('Error updating employee:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4" style={{ maxWidth: '600px' }}>
      <h2>Edit Employee</h2>
      <div className="mb-3">
        <input name="name" value={form.name || ''} onChange={handleChange} className="form-control" placeholder="Name" required />
      </div>
      <div className="mb-3">
        <input name="email" value={form.email || ''} onChange={handleChange} className="form-control" placeholder="Email" required />
      </div>
      <div className="mb-3">
        <input name="position" value={form.position || ''} onChange={handleChange} className="form-control" placeholder="Position" required />
      </div>
      <div className="mb-3">
        <input name="department" value={form.department || ''} onChange={handleChange} className="form-control" placeholder="Department" />
      </div>
      <div className="mb-3">
        <input type="number" name="salary" value={form.salary || ''} onChange={handleChange} className="form-control" placeholder="Salary" required />
      </div>
      <button type="submit" className="btn btn-success">Update Employee</button>
    </form>
  );
};

export default EditEmployee;

