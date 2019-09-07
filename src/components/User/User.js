import React, {Component} from 'react';
import './User.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SweetAlert from 'sweetalert2-react';

class User extends Component {
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
        <Link to="/EditUser">
          <Button id="edit2">Edit</Button>
        </Link>
        <Button id="delete2" onClick={this.showAlert}>
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
        name: 'Alim Agus Muslim',
        nip: '0921345762985',
        action: this.buttonFormatter (),
      },
      {
        id: 2,
        name: 'Muhammad Bambang',
        nip: '0921347877986',
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
      <div className="user-app">
        <div className="call-navbar">
          <Navbar />
          <Sidebar pageWrapId={'user-wrap'} outerContainerId={'App'} />
        </div>
        <div id="user-wrap">
          <div className="tabel-app">
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
                dataField="name"
                dataAlign="center"
                headerAlign="center"
                width="10rem"
              >
                Nama
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="nip"
                dataAlign="center"
                headerAlign="center"
                width="10rem"
              >
                NIP
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="action"
                ataAlign="center"
                headerAlign="center"
                width="8rem"
                dataFormat={this.buttonFormatter}
              >
                Aksi
              </TableHeaderColumn>
            </BootstrapTable>
            <div className="tambahUser">
              <Link to="/TambahUser">
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
export default User;
