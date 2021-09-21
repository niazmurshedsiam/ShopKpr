import React from 'react';
import LeftSidebar from '../../components/common/LeftSidebar';
import RightSidebar from '../../components/common/RightSidebar';
import RoleHeader from '../../components/roles/RoleHeader';
import RoleTable from '../../components/roles/RoleTable';

const Roles = () => {
    return (
        <main className="manage_role row">
        <section className="col-md-2">
            <RightSidebar />
        </section>

        <section className="col-md-8 role">
            <RoleHeader />
            <RoleTable />
        </section>

        <section className="col-md-2">
            <LeftSidebar />
        </section>
    </main>
    );
};

export default Roles;