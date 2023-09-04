import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { resetMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi"; 

const Movies = () => {
    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.movieSlice.movieSlice);

    useEffect(() => {
        const fetchData = async () => {
            const response = await dashboardApi.getAllMovies();
            dispatch(resetMovie(response.data))
        }
        fetchData();
    }, []);

    return (
        <div>
            {
                movieList.map((items) =>
                <span key={items.id}>
                    text={items.text}
                    </span>
                
            )}
            
            
        </div>
    )
};

export default Movies;
