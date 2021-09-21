import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaUsersCog } from 'react-icons/fa';
import { GiRollingDiceCup } from 'react-icons/gi';
import { GrUserSettings } from 'react-icons/gr';
import { HiDownload } from 'react-icons/hi';
import { MdPersonAdd } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import { VscGroupByRefType } from 'react-icons/vsc';
import AddUserModel from '../../Models/User/AddUserModel';
import "../../scss/dashboard/User/UserHeader.scss";

const UserHeader = () => {
    // Add User Modal Functionality
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // React Hook from Functionality
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3001/users', data).then(result => { console.log(result.data.data); }).catch(error => { console.log(error) })
    };


    return (
        <section id="user_header">

            {/* Top header */}
            <div className="d-flex justify-content-between pt-5">
                <div className="d-flex flex-column">
                    <h3 className="text-success">Dashboard <span className="text-dark">//</span> Admin</h3>
                    <span className="text-muted">Add, Edit, Delete Users</span>
                </div>
                <div className="dashboard_btn">
                    <span> <RiDashboardLine /> Dashboard</span>
                </div>
            </div>

            {/* Summary Section */}
            <h3 className="mt-5">Summary</h3>
            <div className="row pt-1">
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center box">
                        <GrUserSettings className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>Admin</h4>
                            <span>{5} admins</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center  box">
                        <FaUsersCog className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>Users</h4>
                            <span>{541} users</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center  box">
                        <VscGroupByRefType className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>Groups</h4>
                            <span>{55} groups</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center  box">
                        <GiRollingDiceCup className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>Roles</h4>
                            <span>{20} roles</span>
                        </div>
                    </div></div>
            </div>


            {/* Header bottom Section */}

            <div className="header_bottom d-flex justify-content-between">
                <div className="">
                    <Button className='csv_btn' variant="outline-success"><HiDownload /> Download CSV</Button>
                    <Button className="pdf_btn" variant="outline-success"><HiDownload /> Download PDF</Button>
                </div>
                <div className="">
                    <Button className="add_user_btn" onClick={() => handleShow()} ><MdPersonAdd /> Add User</Button>
                </div>
            </div>

            {/* Add user Model  */}
            <AddUserModel show={show} handleClose={handleClose} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} />

        </section>
    );
};

export default UserHeader;