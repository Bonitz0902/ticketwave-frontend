import './App.css';
import Movies from './components/Movies';
import { Outlet } from 'react-router-dom';
import SearchMovie from './components/SearchMovie';

function App() {

  return (
    <div className="App">
      <nav>
        <Movies> </Movies>
        <SearchMovie />
        <ul>
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/booking"}>Booking</a></li>
          <li><a href={"/payment"}>Payment</a></li>
          <li><a href={"/createAccount"}>Cerate Account</a></li>
          <li><a href={"/login"}>Login Account</a></li>
          <li><a href={"/movieDetail"}>Movie Detail</a></li>
          <li><a href={"/about"}>About</a></li>
          <li><a href={"/error"}>Error</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
