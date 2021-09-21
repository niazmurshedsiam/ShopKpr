import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import "../../scss/common/LeftSidebar.scss";


const LeftSidebar = () => {
    return (
        <main id="left_sidebar" className="mt-5 d-flex flex-column justify-content-between">
            <div className="top">
                <div className="d-flex flex-row justify-content-between pe-2">
                    <h6>MANAGEMENT</h6>
                    <AiOutlineSetting />
                </div>
                <div className="">
                    <h6>MANAGE</h6>
                    <span>Add, Edit, Delete - Users, Groups and Roles </span>
                </div>

                <div className="">
                    <NavLink to="/dash-board/admin/manage-user" className="nav_link d-flex" activeClassName="selected">
                        <div className="box">01</div>
                        <div className="d-flex flex-column">
                            <h6>MANAGE USER</h6>
                            <span>Let's you manage users</span>
                        </div>
                    </NavLink>

                    <NavLink to="/dash-board/admin/manage-groups" className="nav_link d-flex" activeClassName="selected">
                        <div className="box">02</div>
                        <div className="d-flex flex-column">
                            <h6>MANAGE GROUPS</h6>
                            <span>Let's you manage users</span>
                        </div>
                    </NavLink>

                    <NavLink to="/dash-board/admin/manage-roles" className="nav_link d-flex" activeClassName="selected">
                        <div className="box">03</div>
                        <div className="d-flex flex-column">
                            <h6>MANAGE ROLES</h6>
                            <span>Let's you manage users</span>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="down">
                <h6>QUICK LINKS</h6>
            </div>
        </main>
    );
};

export default LeftSidebar;