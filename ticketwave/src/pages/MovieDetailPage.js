import {Button, Image} from "antd";
import '../css/MovieDetails.css';
import {StarFilled} from "@ant-design/icons";
import {useSelector} from "react-redux";

export const MovieDetailPage = () => {

    const movieList = useSelector(state => state.movieSlice.movieSlice);
    const itemId = 4;

    return (
        <div>
            <div className={"movieDetails"} >
                {
                    movieList.filter(movie => itemId === movie.id).map((item) =>
                        <div key={item.id}>
                        <h1>Movie Details</h1>
                        <center><Image preview={false} width={250} src={item.imageUrl}/>
                        <h2>{item.movieTitle}</h2>
                        <p className={"movieDescription"}>{item.description}</p>
                        <p>Rating: {item.rating}/10<StarFilled className={"ratingIcon"}/>  712k</p>
                        <p>Genre: {item.genre}</p>
                        <p>Director: {item.director}</p>
                        <Button type={"primary"} className={"bookNowBtn"}> Book Now </Button></center>
                        </div>
                    )}
            </div>
        </div>
    );
}