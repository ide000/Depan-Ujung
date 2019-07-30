import React, {Component} from 'react';
import './TambahUser.css';
import Modal from 'react-awesome-modal';

class TambahUser extends Component {
  constructor (props) {
    super (props);
    this.state = {
      visible: false,
    };
  }

  openModal () {
    this.setState ({
      visible: true,
    });
  }

  closeModal () {
    this.setState ({
      visible: false,
    });
  }
  render () {
    return (
      <section>
        <button className="tambah-user-app" onClick={() => this.openModal ()}>
          + Tambah
        </button>
        <Modal
          visible={this.state.visible}
          onClickAway={() => this.closeModal ()}
        >
          <div className="form-modals-user">
            <h3>Daftar User Baru</h3>

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

            <button
              className="button-simpan-user"
              onClick={() => this.closeModal ()}
            >
              Simpan
            </button>

          </div>
        </Modal>
      </section>
    );
  }
}

export default TambahUser;
