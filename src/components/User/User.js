import React, {Component} from 'react';
import './User.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ButtonToolbar, Button} from 'react-bootstrap';

class User extends Component {
  constructor (props) {
    super (props);
    this.sweetalertfunction = this.sweetalertfunction.bind (this);
  }
  sweetalertfunction () {
    console.log ('button clicks');
    Swal.fire ({
      title: 'Apakah Anda yakin?',
      text: 'Anda tidak dapat mengembalikan data yang telah dihapus!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
    }).then (result => {
      if (result.value) {
        Swal.fire ('Dihapus!', 'Data Anda telah dihapus.', 'success');
      }
    });
  }

  onMove (e, props) {
    e.preventDefault ();
    this.props.history.push ('/EditUser');
  }
  buttonFormatter (cell, row) {
    return '<button id="edit2">Edit</button><button id="delete2"  onClick={sweetalertfunction}>Delete</button>';
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
      </div>
    );
  }
}
export default withRouter (User);
