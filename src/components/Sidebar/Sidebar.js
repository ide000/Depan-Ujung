import React from 'react';
import {push as Menu} from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-router-dom';

export default props => {
  return (
    <Menu {...props} isOpen={false}>

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
};

// import React from 'react';
// import {push as Menu} from 'react-burger-menu';
// import './Sidebar.css';
// import {Link} from 'react-router-dom';

// class Navbar extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       menuOpen: false,
//     };
//   }

//   handleStateChange (state) {
//     this.setState ({menuOpen: state.isOpen});
//   }

//   closeMenu () {
//     this.setState ({menuOpen: false});
//   }

//   toggleMenu () {
//     this.setState (state => ({menuOpen: !state.menuOpen}));
//   }

//   render () {
//     return (
//       <div className="sidebar-app">
//         <Menu
//           isOpen={this.state.menuOpen}
//           onStateChange={state => this.handleStateChange (state)}
//         >

//           <div className="title-sidebar">
//             <p>TAKALAR</p>
//             <p>SEHAT</p>
//           </div>
//           <Link to="/Dashboard">
//             <div id="home" className="menu-item">Dashboard</div>
//           </Link>
//           <Link to="/Pertanyaan">
//             <div id="about" className="menu-item">Pertanyaan</div>
//             <div className="list">
//               <ul>
//                 Gangguan Jiwa Berat
//                 <li>Soal No 1</li>
//                 <li>Soal No 2</li>
//                 <li>Soal No 3</li>
//               </ul>
//               <ul>
//                 Disabilitas (umur > 15 tahun)
//                 <li>Soal No 1</li>
//                 <li>Soal No 2</li>
//                 <li>Soal No 3</li>
//               </ul>
//               <ul>
//                 Kesehatan Lingkungan
//               </ul>
//             </div>
//           </Link>
//           <Link to="/User">
//             <div id="contact" className="menu-item">User</div>
//           </Link>
//           <Link to="/SignIn">
//             <div id="log-out" className="log-out">Log Out</div>
//           </Link>
//         </Menu>
//       </div>
//     );
//   }
// }
// export default Navbar;
