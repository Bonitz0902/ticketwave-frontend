import {Button, Image} from "antd";
import '../css/MovieDetails.css';
import {ArrowLeftOutlined, StarFilled} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const MovieDetailPage = () => {

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
                    <div key={selectedMovie.id}>
                        <h2>{selectedMovie.movieTitle}</h2>
                        <center>
                            <Image preview={false} width={"250px"} src={selectedMovie.imageUrl} className={"image"}/>
                            <Button type={"primary"} style={{borderRadius: "20px"}} className={"bookNowBtn"}
                                    onClick={gotoBookingPage} size={"large"}> Book Now </Button>
                            <p className={"movieDescription"}>{selectedMovie.description}</p>
                            <p>Rating: {selectedMovie.rating}/10<StarFilled className={"ratingIcon"}/></p>
                            <p>Genre: {selectedMovie.genre}</p>
                            <p>Director: {selectedMovie.director}</p>
                        </center>
                    </div>
                }
            </div>
        </div>
    );
}