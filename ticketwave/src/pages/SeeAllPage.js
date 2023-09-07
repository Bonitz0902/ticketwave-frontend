import SearchMovie from '../components/SearchMovie';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedMovie} from '../components/movieSlice';
import '../css/SeeAllPage.css';
import Slider from "react-slick";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

export const SeeAllPage = () => {
    const movieList = useSelector((state) => state.movieSlice.movieSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesPerRow: 3,
        rows: 8,

        esponsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesPerRow: 1,
                },
            },
        ],
    };

    const selectMovie = (id) => {
        dispatch(setSelectedMovie(id));
        navigate('/movieDetail');
    }


    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className='parent'>

            <nav>
                <SearchMovie />
            </nav>
            <ArrowLeftOutlined className="goBack" onClick={() => goBack()} />
            <div className="movies-reco">
                <Slider {...settings}>
                    {movieList.map((item, index) => (
                        <div key={index} className="card_content">
                            <div key={index} className="card-pad">
                                <img src={item.imageUrl} onClick={() => selectMovie(item.id)} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}