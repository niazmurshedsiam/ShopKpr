import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import "../../scss/dashboard/Groups/GroupTable.scss";

const GroupTable = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/groups')
            .then(result => {
                setGroups(result.data.data)
            })
            .catch(err => { console.log(err); });
    }, []);
    return (
        <section id="group_table" className="mt-5">
            <Table responsive striped bordered hover>
                <thead className="table_header">
                    <tr>
                        <th>Group Id</th>
                        <th>Group Name</th>
                        <th>Created Date</th>
                        <th>group Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        groups?.map(info => <tr key={info._id}>
                            <td>{info._id}</td>
                            <td>{info.groupName}</td>
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

export default GroupTable;