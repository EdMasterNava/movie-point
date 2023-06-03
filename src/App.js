import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import './pages/modules/styles/css/App.css';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;