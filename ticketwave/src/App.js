import logo from './logo.svg';
import './App.css';
import SearchMovie from './components/SearchMovie';

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
        <SearchMovie />
      </header>
    </div>
  );
}

export default App;
