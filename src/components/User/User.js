import React, {Component} from 'react';
import './User.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class User extends Component {
  constructor (props) {
    super (props);
    this.sweetalertfunction = this.sweetalertfunction.bind (this);
  }
  getData () {
    var data = [
      {
        id: 1,
        name: 'Alim Agus Musalim',
        nip: '09239838484774',
        action: [
          <div className="button1">
            <div id="edit">
              <Link to="/EditUser">
                Edit
              </Link>
            </div>
          </div>,
          <div className="button1">
            <div id="edit">
              <Link to="/EditUser">
                Edit
              </Link>
            </div>
          </div>,
        ],
      },
      {
        id: 2,
        name: 'Muhammad Bambang',
        nip: '38737486782883',
        action: [
          <div className="button1">
            <div id="edit">
              <Link to="/EditUser">
                Edit
              </Link>
            </div>
          </div>,
          <div className="button1">
            <div id="edit">
              <Link to="/EditUser">
                Edit
              </Link>
            </div>
          </div>,
        ],
      },
    ];
    return data;
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
                width="20rem"
              >
                Nama
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="nip"
                dataAlign="center"
                headerAlign="center"
                width="20rem"
              >
                NIP
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="action"
                ataAlign="center"
                headerAlign="center"
                width="10rem"
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
export default User;
