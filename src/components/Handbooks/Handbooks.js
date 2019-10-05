import React from 'react';
import './Handbooks.css'
import {Table} from 'react-bootstrap';



const Handbooks= () => {
        return(
            <div>
                <Table border striped hover className="matpel-tabel">
                    <tbody>
                        
                        <tr>
                            <td>Pelajaran</td>
                            <td>Bab</td>
                            <td>Size</td>
                            <td>Action</td>
                        </tr>    
                    <tr>
                        <td>Fisika</td>
                        <td>3</td>
                        <td>800 Kb</td>
                        <td><button>Download</button></td>
                    </tr>
                    <tr>
                        <td>Kimia</td>
                        <td>1</td>
                        <td>4 Mb</td>
                        <td><button>Download</button></td>
                    </tr>
                    <tr>
                        <td>Matematika</td>
                        <td>1</td>
                        <td>909 Kb</td>
                        <td><button>Download</button></td>
                    </tr>
                    </tbody>
                </Table>
                <div id="Tombol">
                <button>Tambah E-Book</button>
            </div>
        </div>
        );
    }

export default Handbooks;