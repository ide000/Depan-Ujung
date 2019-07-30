import React, {Component} from 'react';
import './User.css';
import {Table, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import TambahUser from './TambahUser/TambahUser';
import EditUser from './EditUser/EditUser';
import Swal from 'sweetalert2';

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
  render () {
    return (
      <div className="user-app">
        <div>
          <Navbar />
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NIP</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Muhammad Bambang</td>
              <td>38737486782883</td>
              <td className="button-apps">
                <EditUser />
                <button className="delete" onClick={this.sweetalertfunction}>
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Alim Agus Musalim</td>
              <td>09239838484774</td>
              <td className="button-apps">
                <EditUser />
                <button className="delete" onClick={this.sweetalertfunction}>
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

        <div className="tambahUser">
          <TambahUser />
        </div>
      </div>
    );
  }
}
export default User;
