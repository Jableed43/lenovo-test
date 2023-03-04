import LandingPage from './components/LandingPage'
import React from 'react';
import "./css/styles.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </>
  );
}

export default App;
