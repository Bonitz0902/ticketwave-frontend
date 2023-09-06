import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { resetMovie, setSelectedMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi"; 
import '../css/Movies.css';
import {NavLink, useNavigate} from "react-router-dom";
import Carousel from "react-multi-carousel";
import { CaretRightOutlined } from '@ant-design/icons';
import "react-multi-carousel/lib/styles.css";
import '../App.css';
import {MovieDetailPage} from "../pages/MovieDetailPage";
import { withRouter } from "react-router-dom";

const Movies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const movieList = useSelector((state) => state.movieSlice.movieSlice);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 2 
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 
        }
      };

    useEffect(() => {
        const fetchData = async () => {
            const response = await dashboardApi.getAllMovies(); 
            dispatch(resetMovie(response.data))
        }
        fetchData();
    }, []);

    const selectMovie = (id) => {
        dispatch(setSelectedMovie(id));
        navigate('/movieDetail', {replace: true});
    }

    return (
        <div className="parent">

            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                partialVisible={false}
                arrows={false}
                dotListClass="custom-dot-list-style"
            >
                {movieList.map((item, index) => (
                <div key={index} className="slider">
                    <img
                    className="movie-image"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                        height: '500px',
                        width: '380px'
                    }}
                />
            </div>
            ))}
            </Carousel>  

            <h2 id="movie-reco-title">Movie Recommendation
            <button> <CaretRightOutlined className="hello"/></button>
            </h2>

            <div className="movies-reco">
                <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                arrows={true}
                dotListClass="custom-dot-list-style"
                >
                {movieList.map((item, index) => (
                <div key={index} className="slider">
                    <img
                    className="movie-image"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                        height: '450px',
                        width: '350px'
                    }}
                    onClick={() => selectMovie(item.id)}
                    />
                </div>
                ))}
                </Carousel>  
            </div>

            <h2 id="movie-avail-title">Available Movies
            <button> <CaretRightOutlined /></button>
            </h2>
            
            <div className="movies-avail">
                <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
                >
                {movieList.map((item, index) => (
                <div key={index} className="slider">
                    <img
                    className="movie-image"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                        height: '450px',
                        width: '350px'
                    }}
                    />
                </div>
                ))}
                </Carousel>  
            </div>
      </div>
    )
};

export default Movies;
