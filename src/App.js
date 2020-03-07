import React from 'react';
import Wrapper from './components/Wrapper.js';
import Sandbox from './components/Sandbox.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sandbox />
      </Wrapper>
    </div>
  );
}

export default App;
