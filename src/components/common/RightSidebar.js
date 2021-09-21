import React from 'react';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { FiLogOut, FiSettings, FiUsers } from 'react-icons/fi';
import { GiSelfLove } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import "../../scss/common/RightSidebar.scss";


const RightSidebar = () => {
    return (
        <section id="right_sidebar" className="d-flex flex-column ps-5">

            <div className="logo py-5"><h3>ShopKpr</h3></div>
            <div className="py-3">
                <FiUsers /> <NavLink to="/dash-board/admin/:extra" className="nav_link" activeClassName="selected">
                    Admin
                </NavLink>
            </div>

            <div className="py-3">
                <GiSelfLove /> <NavLink to="/dash-board/products/:extra" className="nav_link" activeClassName="selected">
                    Products
                </NavLink>
            </div>

            <div className="py-3">
                <FiSettings /> <NavLink to="/dash-board/setting/:extra" className="nav_link" activeClassName="selected">
                    Setting
                </NavLink>
            </div>

            <div className="py-3">
                <BsQuestionSquareFill /> <NavLink to="/dash-board/help/:extra" className="nav_link" activeClassName="selected">
                    Help
                </NavLink>
            </div>

            <div className="logout_btn"> <FiLogOut /> Logout</div>

        </section>
    );
};

export default RightSidebar;