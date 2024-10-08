import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import Tournaments from './components/Tournaments';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import CallOfDuty from './components/CallOfDuty'; // Import CallOfDuty component
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={
            <>
              {/* Profile Row */}
              <div className="row mb-4">
                <Profile />
              </div>
              {/* Profile2 Row */}
              <div className="row mb-4">
                <Profile2 />
              </div>
              {/* Tournaments Row */}
              <div className="row">
                <Tournaments />
              </div>
            </>
          } />

          <Route path="/call-of-duty" element={<CallOfDuty />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
