import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AutoComplete, Image } from "antd";
import { resetMovie, setSelectedMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi";
import '../css/SearchBar.css';
import { useNavigate } from 'react-router-dom';

const { Option } = AutoComplete;

export const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleClick = (id) => {
        dispatch(setSelectedMovie(id));
        navigate("/movieDetail");
    }

    return (
        <div>
            <div className="searchBar">
                <AutoComplete
                    style={{ width: 180 }}
                    placeholder="Search Movie"
                    value={input}
                    onChange={(value) => handleChange(value)}
                >
                    {filteredMovies.map((movie) => (
                        <Option key={movie.id} value={movie.movieTitle}>
                            <Image preview={false} width={50} src={movie.imageUrl} onClick={() => handleClick(movie.id)} />
                            <span onClick={() => handleClick(movie.id)}>{movie.movieTitle}</span>
                        </Option>
                    ))}
                </AutoComplete>
            </div>
        </div>
    )
}