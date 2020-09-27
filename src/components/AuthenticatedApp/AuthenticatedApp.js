import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../services/authentication";
import Events from "../../pages/Events";
import Event from "../../pages/Event";

function AuthenticatedApp() {
  const { signout, user } = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    signout().then(() => {
      history.push("/login");
    });
  };

  return (
    <div>
      <h2>Dear, {user.email}. You're logged in!</h2>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/create-event">Create Event</Link>
              </li>
            </ul>
            <button onClick={handleSignOut}>Sign Out</button>
          </nav>

          <br />
          <hr />
          <br />

          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route path="/event/:id">
              <Event />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedApp;