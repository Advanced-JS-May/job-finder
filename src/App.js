import React from 'react';

/* components */
import Navbar from './components/Navbar/Navbar';
import SwitchRouter from './components/Routes/SwitchRouter/SwitchRouter';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <SwitchRouter />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
