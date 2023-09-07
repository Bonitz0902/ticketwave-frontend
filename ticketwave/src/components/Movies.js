import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMovie } from '../components/movieSlice';
import '../css/Movies.css';
import { useNavigate } from "react-router-dom";
// import Carousel from "react-multi-carousel";
import { Carousel } from 'antd';
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useApis } from "../hooks/useHooks";
import '../App.css';

const Movies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loadAllMovies, loadAllAvailableMovies } = useApis();
    
    const movieList = useSelector((state) => state.movieSlice.movieSlice);
    const movieAvailableList = useSelector((state) => state.movieSlice.movieAvailable);

    const sortedMovies = movieList.slice().sort((a, b) => b.rating - a.rating);
    const top5Movies = sortedMovies.slice(0, 5);

    useEffect(() => {
        const fetchData = async () => {
              loadAllMovies();
              loadAllAvailableMovies();
        }
        fetchData();
    }, []);

    const selectMovie = (id) => {
        dispatch(setSelectedMovie(id));
        navigate('/movieDetail');
    }

    const seeAllPage = () => {
      navigate("/seeAll");
      
    } 

    const settings = {
        dots: false
      , infinite: true
      , speed: 500
      , slidesPerRow: 3
      , rows: 2
    };

    return (
        <div className="parent">
            <Carousel
                autoplay
                centerMode={true}
                centerPadding="0px"
                dots={false}
                >
                {top5Movies.map((item, index) => (
                <div key={index} className="slider">
                    <img
                    className="movie-image-landscape"
                    src={item.imageUrlLandscape}
                    alt={item.title}
                    onClick={() => selectMovie(item.id)}
                />
            </div>
            ))}
            </Carousel>
            <div className="title-div">
              <div className="title-content">
                <div className="title-movie">
                  <span id="movies"
                  style={{ display: 'inline-block', paddingRight: '80px' }}>MOVIES</span>
                  <span id="see" 
                   onClick={() => seeAllPage()}
                  style={{ display: 'inline-block' }}>SEE ALL</span>
                </div>
              </div>
            </div>

            <div className="movie-list">
              <Slider {...settings}>
                {movieAvailableList.map((item, index) => (
                    <div key={index} className="card_content">
                        <div key={index} className="card-pad">
                          <img src={item.imageUrl} onClick={() => selectMovie(item.id)}/>
                        </div> 
                    </div>
                ))}
                </Slider>
            </div>
      </div>
    )
};

export default Movies;
