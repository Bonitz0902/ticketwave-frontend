import './App.css';
import Movies from './components/Movies';
import { Outlet } from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import {MovieDetailPage} from "./pages/MovieDetailPage";

function App() {

  return (
    <div className="App">

      <nav>
        <head>
        </head>
        <SearchMovie />
      </nav>
      <MovieDetailPage />
      <Outlet />
    </div>
  );
}

export default App;
