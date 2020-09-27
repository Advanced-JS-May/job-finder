import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Events from "../../pages/Events";
import EmailVerification from "../../pages/EmailVerification";

function UnauthenticatedApp() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/email-verification">
            <EmailVerification />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default UnauthenticatedApp;