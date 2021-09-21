import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import "../../scss/dashboard/User/UserTable.scss";

const UserTable = () => {
    const [users, setUsers] = useState([])
    const [re, setRe] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(result => {
                console.log(result.data.data);
                setUsers(result.data.data)
            })
            .catch(err => { console.log(err); });
    }, [re]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/users/${id}')
            .then(result => {
                setRe(result.data.data)
            })
            .catch(err => { console.log(err); });
    }

    return (
        <section id="user_table" className="mt-5">
            <Table responsive striped bordered hover>
                <thead className="table_header">
                    <tr>
                        <th>userId</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Created Date</th>
                        <th>User Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(info => <tr key={info._id}>
                            <td>{info._id}</td>
                            <td>{info.name}</td>
                            <td>{info.userName}</td>
                            <td>{info.email}</td>
                            <td>{info.createdAt}</td>
                            <td className="text-success">View Details</td>
                            <td> <span className="text-success edit_btn"><MdModeEdit /> Edit</span>  <span className="text-danger ms-3 delete_btn" onClick={() => handleDelete(info._id)}><RiDeleteBin6Line /> Delete</span> </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </section>
    );
};

export default UserTable;