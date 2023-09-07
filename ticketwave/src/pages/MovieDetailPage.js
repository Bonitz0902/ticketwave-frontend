import {Button, Image} from "antd";
import '../css/MovieDetails.css';
import {ArrowLeftOutlined, StarFilled} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const MovieDetailPage = () => {

    const movieList = useSelector(state => state.movieSlice.movieSlice);
    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    const gotoBookingPage = () => {
        navigate('/booking');
    }

    return (
        <div className={"movieContainer"}>
            <div className={"movieDetails"}>
                <ArrowLeftOutlined onClick={goBack} className={"arrowBack"}/>
                {
                    movieList.filter(movie => selectedMovie === movie.id).map((item) =>
                        <div key={item.id}>
                            <h2>{item.movieTitle}</h2>
                            <center>
                                <Image preview={false} width={"250px"} src={item.imageUrl} className={"image"}/>
                                <Button type={"primary"} style={{borderRadius: "20px"}} className={"bookNowBtn"}
                                        onClick={gotoBookingPage} size={"large"}> Book Now </Button>
                                <p className={"movieDescription"}>{item.description}</p>
                                <p>Rating: {item.rating}/10<StarFilled className={"ratingIcon"}/></p>
                                <p>Genre: {item.genre}</p>
                                <p>Director: {item.director}</p>
                            </center>
                        </div>
                    )}
            </div>
        </div>
    );
}