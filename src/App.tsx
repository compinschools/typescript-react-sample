import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MeComponent from './MeComponent';




function App() {

  const doSomething = (a: number, b: number) => {
    console.log(a + b);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent title="Hello" doSomething={doSomething} />
        <MeComponent name="World" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
