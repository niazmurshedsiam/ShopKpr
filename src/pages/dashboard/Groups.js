import React from 'react';
import LeftSidebar from '../../components/common/LeftSidebar';
import RightSidebar from '../../components/common/RightSidebar';
import GroupHeader from '../../components/groups/GroupHeader';
import GroupTable from '../../components/groups/GroupTable';
import "../../scss/dashboard/Groups/Groups.scss";

const Groups = () => {
    return (
        <main className="manage_groups row">
        <section className="col-md-2">
            <RightSidebar />
        </section>

        <section className="col-md-8 group">
            <GroupHeader />
            <GroupTable />
        </section>

        <section className="col-md-2">
            <LeftSidebar />
        </section>
    </main>
    );
};

export default Groups;