import React from 'react';
import { Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import './App.css';
/* import AuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp'; */
import UnauthenticatedApp from './components/UnauthenticatedApp/Unauthenticated';
import CompanyInfo from './pages/CompanyInfo/CompanyInfo';

import Jobs from './pages/Jobs/Jobs';
>>>>>>> e45ecd74c131f3c8476ac946c379a493e66ef3f0

function App() {
  return (
    <div className="App">
      <header>
        <UnauthenticatedApp />
        <CompanyInfo />
=======
        <Navbar />

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
>>>>>>> e45ecd74c131f3c8476ac946c379a493e66ef3f0
      </header>
    </div>
  );
}

export default App;
