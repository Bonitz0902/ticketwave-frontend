import * as dashboardApi from "../api/dashboardApi";
import { useDispatch } from 'react-redux';
import { resetMovie } from '../components/movieSlice';

export const useApis = () => {
    const dispatch = useDispatch(); //dont remove to reuse 

    async function loadAllMovies() {
        const response = await dashboardApi.getAllMovies();
        dispatch(resetMovie(response.data));
    };

    async function searchMovieByTitle(movieTitle) {
        const response = await dashboardApi.searchMovieByTitle({ movieTitle: movieTitle });
        dispatch(resetMovie(response.data));
    };


    return {
        loadAllMovies,
        searchMovieByTitle,
    };
}