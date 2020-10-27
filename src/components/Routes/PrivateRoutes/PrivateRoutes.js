import React from 'react';

import PrivateRoute from '../PrivateRoute/PrivateRoute';

import EmailVerification from '../../../pages/EmailVerification/EmailVerification';
import CompanyInfo from '../../../pages/CompanyInfo/CompanyInfo';
import { useAuth } from '../../../services/authentication';

function PrivateRoutes() {
  const { user } = useAuth();
  return (
    <>
      <PrivateRoute auth={user} path="/email-verification">
        <EmailVerification />
      </PrivateRoute>
      <PrivateRoute auth={user && user.emailVerified} path="/companies/create">
        <CompanyInfo />
      </PrivateRoute>
    </>
  );
}

export default PrivateRoutes;
