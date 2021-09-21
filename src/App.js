import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/common/common.scss";

import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
const Users = lazy(() => import('./pages/dashboard/Users'));
const Groups = lazy(() => import('./pages/dashboard/Groups'));
const Roles = lazy(() => import('./pages/dashboard/Roles'));


function App() {
  return (
    <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/dash-board/admin/manage-user" component={Users} />
                    <Route exact path="/dash-board/admin/manage-groups" component={Groups} />
                    <Route exact path="/dash-board/admin/manage-roles" component={Roles} />

                    <Route path="*">
                        <div>
                            <h1>This pages not available check app.js file path link search</h1>
                        </div>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
  );
}

export default App;
