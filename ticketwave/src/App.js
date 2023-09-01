import logo from './logo.svg';
import './App.css';

function App() {
  const LOCAL_BASE_URL = "http://localhost:8080/";

  const baseURLByEnv = process.env.REACT_APP_BASE_URL || LOCAL_BASE_URL;
  console.log(baseURLByEnv);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
