import './App.css';
import Movies from './components/Movies';
import { Outlet } from 'react-router-dom';
import SearchMovie from './components/SearchMovie';

function App() {

  return (
    <div className="App">

      <nav>
        <SearchMovie />
      </nav>

 
      <Movies></Movies>
      <Outlet />
    </div>
  );
}

export default App;
