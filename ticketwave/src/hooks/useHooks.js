import * as dashboardApi from "../api/dashboardApi";
import { useDispatch } from 'react-redux';
import { resetMovie } from '../components/movieSlice';

export const useApis = () => {
    const dispatch = useDispatch(); //dont remove to reuse 

    async function loadAllMovies() {
        const response = await dashboardApi.getAllMovies();
        dispatch(resetMovie(response.data));
    };

    async function filteredMovies(movieTitle) {
        await dashboardApi.searchMovieByTitle(movieTitle);
        loadAllMovies();
    };


    return {
        loadAllMovies,
        filteredMovies,
    };
}