import React from 'react';
<<<<<<< HEAD
import { Switch, Route, Link } from 'react-router-dom';

import EmployerSignup from '../../pages/EmployerSignup/EmployerSignup';
import EmailVerification from '../../pages/EmailVerification/EmailVerification';
import Signin from '../../pages/Signin/Signin';
import Home from '../../pages/Home/Home'
import Jobs from '../../pages/Jobs/Jobs';
=======
import { Link } from 'react-router-dom';
>>>>>>> 5efce77e9c4677abae4600741908bd08a596ae12

function UnauthenticatedApp() {
  return (
    <div>
<<<<<<< HEAD
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
          </ul>
          <ul>
            <li>
              Employer
              <ul>
                <li>
                  <Link to="/company/signup">Employer</Link>
                </li>
                <li>
                  <Link to="/register">Job Seeker</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/company/signup">
            <EmployerSignup />
          </Route>
          <Route path="/company/register">
            <EmployerSignup />
          </Route>
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/email-verification">
            <EmailVerification />
          </Route>
        </Switch>
      </div>
=======
      <ul>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
>>>>>>> 5efce77e9c4677abae4600741908bd08a596ae12
    </div>
  );
}

export default UnauthenticatedApp;
