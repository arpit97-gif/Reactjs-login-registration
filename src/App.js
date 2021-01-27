import React from 'react';
import './App.css';
import Loginpage from "./components/Loginpage";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
    <Loginpage/>
    <br/>
    <br/>
    <Register/>
    </div>
  );
}

export default App;
