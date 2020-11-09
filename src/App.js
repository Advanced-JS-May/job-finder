import React from 'react';
import ImageUpload from './components/Company/ImageUpload/ImageUpload';

/* components */
import Navbar from './components/Navbar/Navbar';
import SwitchRouter from './components/Routes/SwitchRouter/SwitchRouter';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <SwitchRouter />
        {/* <ImageUpload /> */}
      </header>
    </div>
  );
}

export default App;
