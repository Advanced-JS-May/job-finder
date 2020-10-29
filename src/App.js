import React from 'react';

/* components */
import Navbar from './components/Navbar/Navbar';
<<<<<<< HEAD
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
=======
import SwitchRouter from './components/Routes/SwitchRouter/SwitchRouter';
>>>>>>> 0fcf3982969f9624f4e137f6e4db1c672826169e

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
<<<<<<< HEAD
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
            <CompaniesInfo />
          </Route>
        </Switch>
=======
        <SwitchRouter />
>>>>>>> 0fcf3982969f9624f4e137f6e4db1c672826169e
      </header>
    </div>
  );
}

export default App;
