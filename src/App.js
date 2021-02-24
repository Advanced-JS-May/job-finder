import React from "react";

/* components */
import Navbar from "./components/Navbar/Navbar";
import SwitchRouter from "./components/Routes/SwitchRouter/SwitchRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SwitchRouter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
