import React, {Component} from 'react';
import './TambahSoal.css';
import {Link} from 'react-router-dom';

class TambahSoal extends Component {
  constructor () {
    super ();
    this.state = {
      question: '',
      options: [{question: ''}],
    };
  }
  handleAddOptionsQuestion = idx => evt => {
    const newOptions = this.state.options.map ((option, sidx) => {
      if (idx !== sidx) return option;
      return {...option, question: evt.target.value};
    });

    this.setState ({options: newOptions});
  };
  handleAddOptions = () => {
    this.setState ({
      options: this.state.options.concat ([{question: ''}]),
    });
  };
  handleRemoveOptions = idx => () => {
    this.setState ({
      options: this.state.options.filter ((s, sidx) => idx !== sidx),
    });
  };

  render () {
    return (
      <div className="form-question">
        <div className="question-app">
          <h1>Pertanyaan</h1>
          <p>Soal</p>
          <input id="question" type="text" placeholder="Tulis Pertanyaan" />
          <br />

          {this.state.options.map ((option, idx) => (
            <div className="option">
              <input
                type="text"
                placeholder={`Pilihan ${idx + 1}`}
                value={option.question}
                onChange={this.handleAddOptionsQuestion (idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveOptions (idx)}
                className="small"
              >
                x
              </button>
            </div>
          ))}

          <div className="options">
            <button
              type="button"
              onClick={this.handleAddOptions}
              className="small"
            >
              Tambah Pilihan
            </button>
          </div>

          <div className="submit">
            <Link to="/Pertanyaan">
              <button className="button-batal">
                Batal
              </button>
            </Link>
            <Link to="/Pertanyaan">
              <button className="button-simpan">
                Simpan
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TambahSoal;
