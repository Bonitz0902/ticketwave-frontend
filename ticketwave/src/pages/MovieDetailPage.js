import {Button, Image} from "antd";

export const MovieDetailPage = () => {

    return (
        <div className={"movieDetails"}>
            <h3>Movie Details</h3>
            <Image width={250} src={"https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature-770x364.jpg"}/>
            <h4>DUNE : Part One</h4>
            <p>Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.</p>
            <p>Rating: 8.0/10   712k</p>
            <p>Genre: Action, Drama, Adventure</p>
            <p>Director:  Dennis Villenueve</p>
            <Button type={"primary"}> Book Now </Button>
        </div>
    );
}