import React from "react";
import Navbar from "./components/Navbar";
import PageHandler from "./components/PageHandler";
import "./App.css";
import "./assets/styles/styles.css"

function App() {
  return (
    <div className="App h-screen">
      <div id="NavBarDiv" className="mb-4 marginTopBot">
        <Navbar />
      </div>
      <div id="PageHandlerDiv">
        <PageHandler />
      </div>
    </div>
  );
}

export default App;
