import React from 'react';
import Navbar from './components/Navbar';
import GoalEntry from './components/GoalEntry';
import './App.css';

function App() {
  return (
    <div className="App h-screen">
      <Navbar/>
      <GoalEntry/>
    </div>
  );
}

export default App;
