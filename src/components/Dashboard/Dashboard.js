import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="welcome-app">
      <div>
        <Navbar />
      </div>
      <div className="welcome">
        <p>WELCOME</p>
        <p>ADMIN</p>
      </div>
    </div>
  );
};

export default Dashboard;
