import React from 'react';
import { Link } from 'react-router-dom';

function UnauthenticatedApp() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default UnauthenticatedApp;
