import React from 'react';
import './Jadwal.css'
import {Table} from 'react-bootstrap';



const Jadwal= () => {
        return(
            <div>
                <Table border striped hover className="matpel-tabel">
                    <tbody>
                        
                        <tr>
                            <td>Jadwal Hari</td>
                            <td>Dafta Mata Pelajaran</td>
                            <td>Waktu</td>
                            <td>Action</td>
                        </tr>    
                    <tr>
                        <td>Senin</td>
                        <td>Matematika</td>
                        <td>80 Menit</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Selasa</td>
                        <td>Fisika</td>
                        <td>100 Menit</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jumat</td>
                        <td>Kimia</td>
                        <td>90 Menit</td>
                        <td><button>Edit</button></td>
                    </tr>
                    </tbody>
                </Table>
                <div id="Tombol">
                <button>Tambah Jadwal</button>
                </div>
            </div>
        );
    }

export default Jadwal;