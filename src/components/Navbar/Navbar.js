import React, {Component} from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar-app">
        <div className="header-app">
          <div><Sidebar /></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
