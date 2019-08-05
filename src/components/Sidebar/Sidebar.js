import React from 'react';
import {push as Menu} from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isOpen: true,
    };
  }
  render () {
    return (
      <Menu {...Sidebar} isOpen={this.state.isOpen}>
        <div className="title-sidebar">
          <p>TAKALAR</p>
          <p>SEHAT</p>
        </div>
        <Link to="/Dashboard">
          <div id="home" className="menu-item">Dashboard</div>
        </Link>
        <Link to="/Pertanyaan">
          <div id="about" className="menu-item">Pertanyaan</div>
          <div className="list">
            <ul>
              Gangguan Jiwa Berat
              <li>Soal No 1</li>
              <li>Soal No 2</li>
              <li>Soal No 3</li>
            </ul>
            <ul>
              Disabilitas (umur > 15 tahun)
              <li>Soal No 1</li>
              <li>Soal No 2</li>
              <li>Soal No 3</li>
            </ul>
            <ul>
              Kesehatan Lingkungan
            </ul>
          </div>
        </Link>
        <Link to="/User">
          <div id="contact" className="menu-item">User</div>
        </Link>
        <Link to="/SignIn">
          <div id="log-out" className="log-out">Log Out</div>
        </Link>
      </Menu>
    );
  }
}

export default Sidebar;
