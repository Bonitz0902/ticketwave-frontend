import './App.css';
import Movies from './components/Movies';
import {Outlet} from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import {useApis} from "./hooks/useHooks";
import {useEffect} from "react";

function App() {
    const {loadAllCinemas, loadAllLocations} = useApis();
    useEffect(() => {
        const fetchData = async () => {
            loadAllCinemas();
            loadAllLocations();
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <nav>
                <SearchMovie/>
            </nav>

            <Movies></Movies>
            <Outlet/>
        </div>
    );
}

export default App;
