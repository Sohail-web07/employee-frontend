import axios from 'axios';

export default axios.create({
  //baseURL: 'http://localhost:5000/api/employees', // Use your backend URL
  baseURL: 'https://employee-backend-1q7b.onrender.com' 
});
