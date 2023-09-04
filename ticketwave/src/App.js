import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const LOCAL_BASE_URL = "http://localhost:8080/";

  const baseURLByEnv = process.env.REACT_APP_BASE_URL || LOCAL_BASE_URL;
  console.log(baseURLByEnv);
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/booking"}>Booking</a></li>
          <li><a href={"/payment"}>Payment</a></li>
          <li><a href={"/createAccount"}>Cerate Account</a></li>
          <li><a href={"/login"}>Login Account</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
