import React from 'react';

import './App.css';
/* import AuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp'; */
import UnauthenticatedApp from './components/UnauthenticatedApp/Unauthenticated';

function App() {
  return (
    <div className="App">
      <header>
        <UnauthenticatedApp />
      </header>
    </div>
  );
}

export default App;
