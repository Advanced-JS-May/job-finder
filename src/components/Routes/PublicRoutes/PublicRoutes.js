import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../../../pages/SignIn/SignIn';
import Signup from '../../../pages/Signup/Signup';
import Home from '../../../pages/Home/Home';
import Jobs from '../../../pages/Jobs/Jobs';
import EmployerSignup from '../../../pages/EmployerSignup/EmployerSignup';

function PublicRoutes() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
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
    </>
  );
}

export default PublicRoutes;
