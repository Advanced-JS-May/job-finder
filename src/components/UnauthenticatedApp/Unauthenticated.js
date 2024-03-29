import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import EmployerSignup from '../../pages/EmployerSignup/EmployerSignup';
import EmailVerification from '../../pages/EmailVerification/EmailVerification';
import SignIn from '../../pages/SignIn/SignIn';
import Signup from '../../pages/Signup/Signup';

import Jobs from '../../pages/Jobs/Jobs';

function UnauthenticatedApp() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/company/signup">
            <EmployerSignup />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/company/register">
            <EmployerSignup />
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
        </Switch>
      </div>
    </div>
  );
}

export default UnauthenticatedApp;
