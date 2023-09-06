import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { resetMovie, setSelectedMovie } from '../components/movieSlice';
import * as dashboardApi from "../api/dashboardApi"; 
import '../css/Movies.css';
import { useNavigate } from "react-router-dom";
// import Carousel from "react-multi-carousel";
import { Carousel } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import "react-multi-carousel/lib/styles.css";
import '../App.css';

const Movies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const movieList = useSelector((state) => state.movieSlice.movieSlice);
    const responsive = [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
    ];
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await dashboardApi.getAllMovies(); 
            dispatch(resetMovie(response.data))
        }
        fetchData();
    }, []);

    const selectMovie = (id) => {
        dispatch(setSelectedMovie(id));
        navigate('/movieDetail');
    }

    return (
        <div className="parent">
            <Carousel
                autoplay
                slidesToShow={5} 
                slidesToScroll={2}
                centerMode={true}
                centerPadding="0px"
                dots={false}
                responsive={responsive}
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

            <h2 id="movie-reco-title">Movie Recommendation
            <button> <CaretRightOutlined className="hello"/></button>
            </h2>

            <div className="movies-reco">
            <Carousel
                draggable
                slidesToShow={5} 
                slidesToScroll={2}
                centerMode={true}
                centerPadding="0px"
                dots={false}
                responsive={responsive}
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
                draggable
                slidesToShow={5} 
                slidesToScroll={2}
                centerMode={true}
                centerPadding="0px"
                dots={false}
                responsive={responsive}
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
