import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useAuth } from '../../../services/authentication';

import SignIn from '../../../pages/SignIn/SignIn';
import Signup from '../../../pages/Signup/Signup';
import Home from '../../../pages/Home/Home';
import Jobs from '../../../pages/Jobs/Jobs';
import CompanyInfo from '../../../pages/CompanyInfo/CompanyInfo';
import EmailVerification from '../../../pages/EmailVerification/EmailVerification';
import CreateProfile from '../../../pages/CreateProfile/CreateProfile';

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
      <Route path="/email-verification">
        <EmailVerification />
      </Route>
      <Route path="/profile/create">
        <CreateProfile />
      </Route>

      <PrivateRoute auth={user && user.emailVerified} path="/company/create">
        <CompanyInfo />
      </PrivateRoute>
    </Switch>
  );
}
export default SwitchRouter;
