import './App.css';
import Movies from './components/Movies';
import { Outlet } from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import {MovieDetailPage} from "./pages/MovieDetailPage";
import {Button} from "antd";
import {useState} from "react";

function App() {
  return (
    <div className="App">

      <nav>
        <SearchMovie />
      </nav>

      <MovieDetailPage />
 
      <Movies></Movies>
      <Outlet />
    </div>
  );
}

export default App;
