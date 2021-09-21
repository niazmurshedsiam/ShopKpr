import React from 'react';
import LeftSidebar from '../../components/common/LeftSidebar';
import RightSidebar from '../../components/common/RightSidebar';
import Header from '../../components/users/UserHeader';
import UserTable from '../../components/users/UserTable';
import "../../scss/dashboard/User/Users.scss";

const Users = () => {
    return (
        <main className="manage_user row">
            <section className="col-md-2">
                <RightSidebar></RightSidebar>
            </section>

            <section className="col-md-8 user">
                <Header />
                <UserTable />
            </section>

            <section className="col-md-2">
                <LeftSidebar />
            </section>
        </main>
    );
};

export default Users;