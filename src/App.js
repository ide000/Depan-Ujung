import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Siswa from './components/Siswa/Siswa';
import Tutor from './components/Tutor/Tutor';
import Handbooks from './components/Handbooks/Handbooks';
import Jadwal from './components/Jadwal/Jadwal';
class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Dashboard} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/Sidebar" component={Sidebar} />
          <Route path="/Siswa" component={Siswa} />
          <Route path="/Tutor" component={Tutor} />
          <Route path="/Jadwal" component={Jadwal}/>
          <Route path="/Handbooks" component={Handbooks}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
