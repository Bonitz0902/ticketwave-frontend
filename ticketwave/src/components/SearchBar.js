import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Input } from "antd";
import { resetMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi";

const { Search } = Input;

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
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
    }

    return (
        <div>
            <Search
                placeholder="Search Movie"
                value={input}
                onChange={(event) => handleChange(event.target.value)}
            />
            <ul>
                {movieList.map((item) =>
                    <li key={item.id}> {item.movieTitle} </li>
                )}
            </ul>
        </div>
    )
}