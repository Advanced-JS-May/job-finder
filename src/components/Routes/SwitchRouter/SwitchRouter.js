import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoutes from '../PublicRoutes/PublicRoutes';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

function SwitchRouter() {
  return (
    <Switch>
      <PublicRoutes />
      <PrivateRoutes />
    </Switch>
  );
}
export default SwitchRouter;
