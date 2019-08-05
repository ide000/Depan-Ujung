import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div id="App" className="welcome-app">
      <div>
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      </div>
      <div className="welcome-text">
        <div id="page-wrap" className="welcome">
          <p>WELCOME</p>
          <p>ADMIN</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
