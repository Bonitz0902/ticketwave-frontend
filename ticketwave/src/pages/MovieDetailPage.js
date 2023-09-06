import {Button, Image} from "antd";
import '../css/MovieDetails.css';
import {StarFilled} from "@ant-design/icons";
import {useSelector} from "react-redux";

export const MovieDetailPage = () => {

    const movieList = useSelector(state => state.movieSlice.movieSlice);
    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);

    const gotoBookingPage = () => {
         navigate('/booking');
    }

    return (
        <div className={"movieContainer"}>
            <div className={"movieDetails"} >
                <ArrowLeftOutlined onClick={goBack}/>
                {
                    movieList.filter(movie => selectedMovie === movie.id).map((item) =>
                        <div key={item.id}>
                        <h1>{item.movieTitle}</h1>
                        <center><Image preview={false} src={item.imageUrl} className={"image"}/>
                        <h2>{item.movieTitle}</h2>
                        <p className={"movieDescription"}>{item.description}</p>
                        <p>Rating: {item.rating}/10<StarFilled className={"ratingIcon"}/>  712k</p>
                        <p>Genre: {item.genre}</p>
                        <p>Director: {item.director}</p>
                        <Button type={"primary"} style={{borderRadius: "20px"}} className={"bookNowBtn"} onClick={gotoBookingPage} size={"large"}> Book Now </Button></center>
                        </div>
                    )}
            </div>
        </div>
    );
}