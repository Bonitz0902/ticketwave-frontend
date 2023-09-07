import * as dashboardApi from "../api/dashboardApi";
import * as loginApi from "../api/loginApi";
import {useDispatch} from 'react-redux';
import {resetAllMovie, resetMovie, setSelectedMovie, loadLocations} from '../components/movieSlice';
import {resetLogin} from '../components/loginSlice';
import * as bookingApi from "../api/bookingApi";

export const useApis = () => {
    const dispatch = useDispatch(); //dont remove to reuse 

    async function loadAllMovies() {
        const response = await dashboardApi.getAllMovies();
        dispatch(resetMovie(response.data));
    };

    async function loadAllAvailableMovies() {
        const response = await dashboardApi.getAllAvailableMovies();
        dispatch(resetAllMovie(response.data));
    };


    async function createAccount (name, email, password) {
        const response = await loginApi.addAccount
            ({  
                accountName: name, 
                accountEmail: email, 
                accountPassword: password
            });
        dispatch(resetLogin(response.data));
    };

    async function loadAllCinemasByLocationAndMovie (locationId, movieId) {
        const response = await bookingApi.getAllCinemasByLocationAndMovie(locationId, movieId);
        dispatch(setSelectedMovie(response.data));
    }

    async function loadAllLocations() {
        const response = await bookingApi.getAllLocation();
        dispatch(loadLocations(response.data));
    }

    return {
        loadAllMovies,
        loadAllAvailableMovies,
        createAccount,
        loadAllCinemasByLocationAndMovie,
        loadAllLocations
    };
}