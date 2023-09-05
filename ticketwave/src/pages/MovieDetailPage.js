import {Button, Image, Modal} from "antd";
import '../css/MovieDetails.css';
import {StarFilled} from "@ant-design/icons";
import {useState} from "react";

export const MovieDetailPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button type={"primary"} onClick={showModal}>show modal</Button>
            <Modal open={isModalOpen} onOk={handleOk}>
                <div className={"movieDetails"}>
                    <h3>Movie Details</h3>
                    <center><Image preview={false} width={250} src={"https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature-770x364.jpg"}/></center>
                    <h4>DUNE : Part One</h4>
                    <p className={"movieDescription"}>Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.</p>
                    <p>Rating: 8.0/10<StarFilled className={"ratingIcon"}/>  712k</p>
                    <p>Genre: Action, Drama, Adventure</p>
                    <p>Director:  Dennis Villenueve</p>
                    <center><Button type={"primary"} className={"bookNowBtn"}> Book Now </Button></center>
                </div>
            </Modal>
        </div>
    );
}