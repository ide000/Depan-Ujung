import React, {Component} from 'react';
import './Pertanyaan.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {transform} from '@babel/core';

class Pertanyaan extends Component {
  constructor (props) {
    super (props);
    this.sweetalertfunction = this.sweetalertfunction.bind (this);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }

  getData () {
    var data = [
      {
        id: 1,
        question: 'Apakah ada anggota keluarga yang mengalami gangguan jiwa ?',
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
        question: 'Jika No. 2 dan atau No. 3 ya, berapa anggota keluarga ?',
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
          <Sidebar
            style={
              this.state.isOpen === true
                ? {
                    transform: 'translate3d(150px,0px,0px !important',
                    transition: 'all 0.5 ease !important',
                  }
                : {marginLeft: 'auto'}
            }
            pageWrapId={'question-wrap'}
            outerContainerId={'App'}
          />
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
                dataField="question"
                dataAlign="left"
                headerAlign="center"
                width="40rem"
              >
                Soal
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="action"
                ataAlign="left"
                headerAlign="center"
                width="15rem"
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
      </div>
    );
  }
}
export default Pertanyaan;
