import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AutoComplete } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { resetMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi";
import '../css/SearchBar.css';

const { Option } = AutoComplete;

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
                            {movie.movieTitle}
                        </Option>
                    ))}

                </AutoComplete>
                <button className="submitButton" type="submit">
                    <SearchOutlined className="iconSearch" />
                </button>
            </div>
        </div>
    )
}