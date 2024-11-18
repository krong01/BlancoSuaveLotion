import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<Homepage/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
