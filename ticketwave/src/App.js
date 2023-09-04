import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

function App() {
  const LOCAL_BASE_URL = "http://localhost:8080/";

  const baseURLByEnv = process.env.REACT_APP_BASE_URL || LOCAL_BASE_URL;
 
  const load = () => {
    const targetURL = 'Movies.js';

    window.location.href = targetURL;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Movies> </Movies>
      </header>
    </div>
  );
}

export default App;
