import './App.css';
import Movies from './components/Movies';
import SearchMovie from './components/SearchMovie';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Movies> </Movies>
        <SearchMovie />
      </header>
    </div>
  );
}

export default App;
