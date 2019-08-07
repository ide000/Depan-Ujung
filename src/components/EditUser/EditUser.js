import React, {Component} from 'react';
import './EditUser.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

class EditUser extends Component {
  render () {
    return (
      <div className="edit-user">
        <div className="call-navbar">
          <Navbar />
          <Sidebar pageWrapId={'user-wraps'} outerContainerId={'App'} />
        </div>
        <div id="user-wraps" className="form-editUser">

          <div className="form-editUserApp">
            <h1>Daftar User Baru</h1>

            <label for="nama">Nama Lengkap</label><br />
            <input type="text" placeholder="Nama Lengkap" /><br />

            <label for="email">Email</label><br />
            <input type="email" placeholder="Alamat Email" /><br />

            <label for="nip">NIP</label><br />
            <input type="nip" placeholder="No Induk Pegawai" /><br />

            <label for="noTelp">No Telp</label><br />
            <input type="noTelp" placeholder="No telepon aktif" /><br />

            <label for="password">Password</label><br />
            <input type="password" placeholder="Kata sandi" /><br />

            <div className="edit-user-button2">
              <button className="button-cancelUser">
                Batal
              </button>
              <button className="button-simpanUser">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditUser;
