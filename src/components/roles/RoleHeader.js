import React from 'react';
import { Button } from 'react-bootstrap';
import { FaUserCog } from 'react-icons/fa';
import { GiRollingDiceCup } from 'react-icons/gi';
import { GrUserSettings } from 'react-icons/gr';
import { HiDownload } from 'react-icons/hi';
import { MdPersonAdd } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import { VscGroupByRefType } from 'react-icons/vsc';
import "../../scss/dashboard/Role/RoleHeader.scss";

const RoleHeader = () => {
    return (
        <section id="role_header">

            {/* Top header */}
            <div className="d-flex justify-content-between pt-5">
                <div className="d-flex flex-column">
                    <h3 className="text-success">Dashboard <span className="text-dark">//</span> Admin</h3>
                    <span className="text-muted">Add, Edit, Delete roles</span>
                </div>
                <div className="dashboard_btn">
                    <span> <RiDashboardLine /> Dashboard</span>
                </div>
            </div>

            {/* Summary Section */}
            <h3 className="mt-5">Roles Summary</h3>
            <div className="row pt-1">
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center box">
                        <GrUserSettings className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>Total roles</h4>
                            <span>{541} roles</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center  box">
                        <FaUserCog className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>This Year</h4>
                            <span>{41} roles</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center  box">
                        <VscGroupByRefType className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>This Month</h4>
                            <span>{30} roles</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex flex-row align-items-center  box">
                        <GiRollingDiceCup className="my_icon" />
                        <div className="d-flex flex-column">
                            <h4>This Week</h4>
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
                    <Button className="add_role_btn" ><MdPersonAdd /> Add role</Button>
                </div>
            </div>

        </section>
    );
};

export default RoleHeader;