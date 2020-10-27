import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../../../pages/SignIn/SignIn';
import Signup from '../../../pages/Signup/Signup';
import Home from '../../../pages/Home/Home';
import Jobs from '../../../pages/Jobs/Jobs';

function PublicRoutes() {
  return (
    <>
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
    </>
  );
}

export default PublicRoutes;
