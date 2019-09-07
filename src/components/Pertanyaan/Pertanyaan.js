import React, {Component} from 'react';
import './Pertanyaan.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SweetAlert from 'sweetalert2-react';

class Pertanyaan extends Component {
  constructor (props) {
    super (props);
    this.state = {
      show: false,
    };
    this.showAlert = this.showAlert.bind (this);
  }

  buttonFormatter (cell, row) {
    return (
      <div>
        <Link to="/EditSoal">
          <Button id="edit1">Edit</Button>
        </Link>
        <Button id="delete1" onClick={this.showAlert}>
          Delete
        </Button>
      </div>
    );
  }

  showAlert (event) {
    this.setState ({show: true});
    console.log ('click');
  }
  getData () {
    var data = [
      {
        id: 1,
        question: 'Apakah ada anggota keluarga yang mengalami gangguan jiwa ?',
        action: this.buttonFormatter (),
      },
      {
        id: 2,
        question: 'Jika No. 2 dan atau No. 3 ya, berapa anggota keluarga ?',
        action: this.buttonFormatter (),
      },
    ];
    return data;
  }

  render () {
    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
      </span>
    );

    const options = {
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      paginationTotalRenderer: customTotal,
      sizePerPageList: [
        {
          text: '5',
          value: 5,
        },
        {
          text: '10',
          value: 10,
        },
        {
          text: '20',
          value: 20,
        },
      ],
    };
    return (
      <div className="pertanyaan-app">

        <div className="call-navbar">
          <Navbar />
          <Sidebar pageWrapId={'question-wrap'} outerContainerId={'App'} />
        </div>
        <div id="question-wrap">
          <div className="tabel-app">
            {/* style={
              this.props.isOpen === true
                ? {
                    transform: 'translate3d(150px,0px,0px !important',
                    transition: 'all 0.5 ease !important',
                  }
                : {marginLeft: 'auto'}
            } */}
            <BootstrapTable
              data={this.getData ()}
              pagination={true}
              options={options}
            >
              <TableHeaderColumn
                isKey
                dataField="id"
                dataAlign="center"
                headerAlign="center"
                width="3rem"
              >
                No
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="question"
                dataAlign="left"
                headerAlign="center"
                width="40rem"
              >
                Soal
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="action"
                dataAlign="left"
                headerAlign="center"
                width="10rem"
                dataFormat={this.buttonFormatter.bind (this)}
              >
                Aksi
              </TableHeaderColumn>
            </BootstrapTable>
            <div className="tambahSoal">
              <Link to="/TambahSoal">
                <button className="TambahSoal">+ Tambah</button>
              </Link>
            </div>
          </div>
        </div>
        <SweetAlert
          show={this.state.show}
          type="warning"
          confirmButtonText="Hapus"
          title="Apakah Anda Yakin?"
          text="Anda tidak dapat mengembalikan data yang telah dihapus!"
          confirmButtonColor="#d33"
          showCancelColor="#3085d6"
          showCancelButton
          onConfirm={() => {
            console.log ('confirm');
            this.setState ({show: false});
          }}
          onCancel={() => {
            console.log ('cancel');
            this.setState ({show: false});
          }}
          onEscapeKey={() => this.setState ({show: false})}
          onOutsideClick={() => this.setState ({show: false})}
        />
      </div>
    );
  }
}
export default Pertanyaan;
