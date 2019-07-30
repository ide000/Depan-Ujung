import React, {Component} from 'react';
import './Pertanyaan.css';
import {Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import TambahSoal from './TambahSoal/TambahSoal';
import Swal from 'sweetalert2';
import EditSoal from './EditSoal/EditSoal';

class Pertanyaan extends Component {
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
  render () {
    return (
      <div className="pertanyaan-app">
        <div>
          <Navbar />
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Soal</th>
              <th className="aksi">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="text">
                Apakah ada anggota keluarga yang mengalami gangguan jiwa ?
              </td>
              <td className="button-app">
                <EditSoal />
                <button className="hapus" onClick={this.sweetalertfunction}>
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="text">
                Jika No. 2 dan atau No. 3 ya, berapa anggota keluarga ?
              </td>
              <td className="button-app">
                {/* <button className="edit">Edit</button> */}
                <EditSoal />
                <button className="hapus" onClick={this.sweetalertfunction}>
                  Hapus
                </button>

              </td>
            </tr>
          </tbody>
        </Table>
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
        </Pagination>

        <div className="tambahSoal">
          <TambahSoal />
        </div>
      </div>
    );
  }
}
export default Pertanyaan;
