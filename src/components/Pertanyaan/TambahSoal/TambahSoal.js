import React, {Component} from 'react';
import './TambahSoal.css';
import Modal from 'react-awesome-modal';

class TambahSoal extends Component {
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
        <button
          className="tambah-pertanyaan-app"
          onClick={() => this.openModal ()}
        >
          + Tambah
        </button>
        <Modal
          visible={this.state.visible}
          onClickAway={() => this.closeModal ()}
        >
          <div className="form-modals">
            <h3>Pertanyaan</h3>
            <p>Soal</p>
            <input id="pertanyaan" type="text" placeholder="Tulis Pertanyaan" />
            <br />
            <div className="pilihan">
              <input type="radio" id="radio-1" name="radio" />
              <input id="input1" type="text" placeholder="Pilihan 1" />
            </div>
            <div className="tambah-pertanyaan">
              <input type="radio" id="radio-2" name="radio" />
              <input id="input2" type="text" placeholder="Tambah Pertanyaan" />
            </div>
            <button className="button-batal" onClick={() => this.closeModal ()}>
              Batal
            </button>
            <button
              className="button-simpan"
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

export default TambahSoal;
