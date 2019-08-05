import React, {Component} from 'react';
import './EditUser.css';

class EditUser extends Component {
  render () {
    return (
      <div className="form-editUser">
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

          <button className="button-simpanUser">
            Simpan
          </button>
        </div>
      </div>
    );
  }
}
export default EditUser;
