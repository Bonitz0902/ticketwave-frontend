import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Input } from "antd";
import { resetMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi";

const { Search } = Input;

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const movieList = useSelector((state) => state.movieSlice.movieSlice);

    useEffect(() => {
        const fetchData = async () => {
            const response = await dashboardApi.getAllMovies();
            dispatch(resetMovie(response.data))
        }
        fetchData();
    }, []);

    const handleChange = (value) => {
        setInput(value);
        setFilteredMovies(movieList.filter(movies => movies.movieTitle.toLowerCase().includes(value.toLowerCase())));
    }

    const searchMovies = async (movieTitle) => {
        // try {
        //   const response = await dashboardApi.searchMovieByTitle(movieTitle);
      
        //   setFilteredMovies(response.data);
        //   console.log(response.data);
        // } catch (error) {
        //   console.error('Error searching movies:', error);
        // }
      };

    return (
        <div>
        {
            movieList.map((items) =>
            <span key={items.id}>
                {items.movieTitle}
            </span>
            
        )}
            
        <Search
            placeholder="Search Movie"
            value={input}
            onChange={(event) => handleChange(event.target.value)}
            onSearch={() => searchMovies(input)} 
            />

        <ul>
            {filteredMovies.map((movie) => (
            <li key={movie.id}>{movie.movieTitle}</li>
            ))}
        </ul>
        
    </div>
    )
}