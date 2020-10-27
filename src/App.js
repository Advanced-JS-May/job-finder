import React from 'react';

/* components */
import Navbar from './components/Navbar/Navbar';
import SwitchRouter from './components/Routes/SwitchRouter/SwitchRouter';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <SwitchRouter />
      </header>
    </div>
  );
}

export default App;
