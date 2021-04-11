import React from "react";
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';


function App() {
  return (
    <div className="App">
      <Home/>
      <Quiz/>
      <Result/>
    </div>
  );
}

export default App;
