import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useAuth } from '../../../services/authentication';

import SignIn from '../../../pages/SignIn/SignIn';
import Signup from '../../../pages/Signup/Signup';
import Home from '../../../pages/Home/Home';
import Jobs from '../../../pages/Jobs/Jobs';
import Company from '../../../pages/Company/Company';
import EmailVerification from '../../../pages/EmailVerification/EmailVerification';
import CreateProfile from '../../../pages/CreateProfile/CreateProfile';
import AllCompanies from '../../../pages/AllCompanies/AllCompanies';
import CompanyInfo from '../../../components/Company/CompanyInfo/CompanyInfo';
import { USER_ROLES } from '../../../constants/user.constants';

function SwitchRouter() {
  const { user } = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/jobs">
        <Jobs />
      </Route>
      <Route path="/companies">
        <AllCompanies />
      </Route>
      <Route path="/email-verification">
        <EmailVerification />
      </Route>
      {/* regular user */}
      <PrivateRoute auth={user} path="/profile/create">
        <CreateProfile />
      </PrivateRoute>
      <PrivateRoute auth={user} path="/profile/:id">
        <div>{user && user.role}</div>
      </PrivateRoute>

      {/* company user */}
      <Route path="/company/profile">
        <CompanyInfo />
      </Route>
      <Route path="/company/:id">
        <Company />
      </Route>
      {/* <PrivateRoute auth={user && user.emailVerified} path="/company/:id">
        <Company />
      </PrivateRoute>  */}
    </Switch>
  );
}
export default SwitchRouter;
