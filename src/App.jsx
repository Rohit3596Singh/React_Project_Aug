import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Signup from './Signup';
import Login from './Login'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
}

export default App;
