import SearchMovie from '../components/SearchMovie';
import { useSelector } from 'react-redux';
import '../css/SeeAllPage.css';
import Slider from "react-slick";
import { LeftCircleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export const SeeAllPage = () => {
    const movieList = useSelector((state) => state.movieSlice.movieSlice);
    const navigate = useNavigate();

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

    const goBack = () => {
       navigate("/");
    }    

    return (
        <div className='parent'>
           
            <nav>
                <SearchMovie/>
            </nav>
            <LeftCircleOutlined className="goBack" onClick={() => goBack()}/>
            <div className="movies-reco">
            <Slider {...settings}>
              {movieList.map((item, index) => (
                   <div key={index} className="card_content">
                        <div key={index} className="card-pad">
                            <img src={item.imageUrl}/>
                        </div>
                  </div>
              ))}
              </Slider>
            </div>
        </div>
    )
}