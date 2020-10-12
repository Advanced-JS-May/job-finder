import React from 'react';

import './App.css';
/* import AuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp'; */
import UnauthenticatedApp from './components/UnauthenticatedApp/Unauthenticated';
import CompanyInfo from './pages/CompanyInfo/CompanyInfo';

function App() {
  return (
    <div className="App">
      <header>
        <UnauthenticatedApp />
        <CompanyInfo />
      </header>
    </div>
  );
}

export default App;
