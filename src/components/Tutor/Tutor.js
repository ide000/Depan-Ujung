import React from 'react';
import './Tutor.css';
import {Table} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Tutor = () => {
    return (
        <div>
        <Table border striped hover className="tabel1">
            <tbody>
                
                <tr>
                    <td>No</td>
                    <td>Nama Tutor</td>
                    <td>Pelajaran</td>
                    <td>Input</td>
                </tr>    
            <tr>
              <td>1</td>
              <td>Yayan Ruhiyat</td>
              <td>Fisika</td>
              <td><button>Edit</button>  <button>Delete</button></td>
             </tr>
             <tr>
              <td>2</td>
              <td>Bima Sujana</td>
              <td>Kimia</td>
              <td><button>Edit</button>  <button>Delete</button></td>
             </tr>
             
            </tbody>
        </Table>
        <div id="Tombol">
            <button>Tambah Tutor</button>
        </div>
    </div>
);
};

export default Tutor;
