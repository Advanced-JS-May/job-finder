import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

function PrivateRoute({ path, auth, children }) {
  return (
    <Route path={path}>
      {auth === null ? (
        <LinearProgress />
      ) : auth ? (
        children
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}

export default PrivateRoute;
