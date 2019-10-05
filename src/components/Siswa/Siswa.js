import React from 'react';
import './Siswa.css';
import {Table} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Siswa = () => {
  return (
        <div>
                <Table border striped hover className="tabel1">
                    <tbody>
                        
                        <tr>
                            <td>No</td>
                            <td>Nama Siswa</td>
                            <td>NIS</td>
                            <td>Aksi</td>
                        </tr>    
                    <tr>
                      <td>1</td>
                      <td>Muhammad Fadhil</td>
                      <td>121171512</td>
                      <td><button>Edit</button>  <button>Delete</button></td>
                     </tr>
                     <tr>
                      <td>2</td>
                      <td>Arya Aqib</td>
                      <td>121171508</td>
                      <td><button>Edit</button>  <button>Delete</button></td>
                     </tr>
                     
                    </tbody>
                </Table>
                <div id="Tombol" >
                <button>Tambah Siswa</button>
                </div>
            </div>
      );
};

export default Siswa;
