import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import Dahsboard from './pages/Dahsboard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dahsboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
