import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import "../../scss/dashboard/Role/RoleTable.scss";

const RoleTable = () => {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/roles')
            .then(result => {
                setRoles(result.data.data)
            })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <section id="role_table" className="mt-5">
            <Table responsive striped bordered hover>
                <thead className="table_header">
                    <tr>
                        <th>role Id</th>
                        <th>role Name</th>
                        <th>Created Date</th>
                        <th>role Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        roles?.map(info => <tr key={info._id}>
                            <td>{info._id}</td>
                            <td>{info.roleName}</td>
                            <td>{info.createdAt}</td>
                            <td className="text-success">View Details</td>
                            <td> <span className="text-success edit_btn"><MdModeEdit /> Edit</span>  <span className="text-danger ms-3 delete_btn"><RiDeleteBin6Line /> Delete</span> </td>
                        </tr>)
                    }
                   
                </tbody>
            </Table>
        </section>
    );
};

export default RoleTable;