import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Tournaments from './components/Tournaments';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>

          <div className="col-md-10">
            {/* Profile Row */}
            <div className="row mb-4"> {/* Add margin-bottom for spacing */}
              <Profile />
            </div>

            {/* Profile2 Row */}
            <div className="row mb-4"> {/* Add margin-bottom for spacing */}
              <Profile2 />
            </div>

            {/* Tournaments Row */}
            <div className="row">
              <Tournaments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
