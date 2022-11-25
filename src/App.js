import React from "react";
import Navbar from "./components/Navbar";
import PageHandler from "./components/PageHandler";
import "./App.css";

function App() {
  return (
    <div className="App h-screen">
      <div id="NavBarDiv" className="mb-4">
        <Navbar />
      </div>
      <div id="PageHandlerDiv">
        <PageHandler />
      </div>
    </div>
  );
}

export default App;
