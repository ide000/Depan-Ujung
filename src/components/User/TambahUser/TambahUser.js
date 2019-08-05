import React, {Component} from 'react';
import './TambahUser.css';
import {Link} from 'react-router-dom';

class TambahUser extends Component {
  render () {
    return (
      <div className="form-user">
        <div className="form-user-app">
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

          <Link to="/User">
            <button className="button-simpan-user">
              Simpan
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TambahUser;
