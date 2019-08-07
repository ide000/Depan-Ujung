import React, {Component} from 'react';
import './Pertanyaan.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import swal from 'sweetalert2';
import SweetAlert from 'sweetalert2-react';

class Pertanyaan extends Component {
  constructor (props) {
    super (props);
    this.state = {
      show: false,
    };
  }
  // const SweetAlert = withSwalInstance(swal);

  buttonFormatter (cell, row) {
    // onClick={() => this.setState({ show: true })}
    return '<Button id=edit1>Edit</Button> <Button id=delete1>Delete</Button>';
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
                dataFormat={this.buttonFormatter}
              >
                Aksi
              </TableHeaderColumn>
            </BootstrapTable>
            <SweetAlert
              show={this.state.show}
              title="Demo"
              text="SweetAlert in React"
              onConfirm={() => this.setState ({show: false})}
            />
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
