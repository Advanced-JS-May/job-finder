import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoutes from '../PublicRoutes/PublicRoutes';

function SwitchRouter() {
  return (
    <Switch>
      <PublicRoutes />
    </Switch>
  );
}
export default SwitchRouter;
