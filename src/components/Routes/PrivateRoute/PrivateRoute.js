import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, auth, ...rest }) {
  return <Route>{auth ? children : <Redirect to="/login" />}</Route>;
}

export default PrivateRoute;
