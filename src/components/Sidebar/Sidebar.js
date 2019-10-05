import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-router-dom';

export default Sidebar => {
  return (
    <Menu {...Sidebar} isOpen={true}>
      <div className="title-sidebar">
        <h1>ADMIN DASHBOARD</h1>
      </div>
      <div className="daftar-sidebar">
      <Link to="../Siswa/Siswa.js">
        <div id="about" className="menu-item">Daftar Siswa</div>
      </Link>
      <Link to="../Tutor/Tutor.js">
        <div id="contact" className="menu-item">Daftar Tutor</div>
      </Link>
      <Link to="../Jadwal/Jadwal.js">
        <div id="contact" className="menu-item">Jadwal Les</div>
      </Link>
      <Link to="../Handbooks/Handbooks.js">
        <div id="contact" className="menu-item">Handbooks</div>
      </Link>
      <Link to="#">
        <div id="log-out" className="log-out">Log Out</div>
      </Link>
      </div>
    </Menu>
  );
};
