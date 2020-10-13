import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* components */
import EmployerSignup from './pages/EmployerSignup/EmployerSignup';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import SignIn from './pages/SignIn/SignIn';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

import Jobs from './pages/Jobs/Jobs';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Switch>
		  <Route path="/home">
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
          <Route path="/email-verification">
            <EmailVerification />
          </Route>
          <Route path="/companies">
            <CompanyInfo />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;