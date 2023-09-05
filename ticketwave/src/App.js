import './App.css';
import Movies from './components/Movies';
import { Outlet } from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import {MovieDetailPage} from "./pages/MovieDetailPage";
import {Button} from "antd";
import {useState} from "react";

function App() {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const showModal = {

  }
  return (
    <div className="App">

      <nav>
        <head>
        </head>
        <SearchMovie />
      </nav>
      <Button onClick={showModal}>Sample Button</Button>
      <Outlet />
    </div>
  );
}

export default App;
