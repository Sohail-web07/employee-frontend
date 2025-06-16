import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './components/EditEmployee';


function App() {
  return (
    
   <Router>

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* <Link to="/" className="navbar-brand">Employee Manager</Link> */}
        </div>
      </nav>
      <Routes> {/* Your routes here */} </Routes>
    </>

      <div className="container">
        <h1>Employee Management</h1>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/add" element={ <AddEmployee />} />
          <Route path="/edit/:id" element={ <EditEmployee />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
