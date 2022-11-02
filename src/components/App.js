import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {
    Month,
    HomePage
} from './';

function App() {
    return (
      <div>
        <Routes>
            <Route exact path="/months" element={<Month />} />
            <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
  
  export default App;