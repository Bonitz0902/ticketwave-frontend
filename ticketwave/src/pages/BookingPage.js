import './../css/BookingPage.css'
import ticketwavelogo from "../ticketwavelogo.png";
import React, {useEffect, useState} from "react";
import {UserOutlined} from "@ant-design/icons";
import {Image, Select, Radio, Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectReducer} from "@mui/base/useSelect/selectReducer";

export const BookingPage = () => {

    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);
    const loadLocations = useSelector(state => state.movieSlice.cinemaLocations);
    const loadCinemas = useSelector(state => state.movieSlice.cinemas);
    const navigate = useNavigate();
    const [filteredLocations, setFilteredLocations] = useState([]);

    useEffect(() => {
        let locations = [];
        loadCinemas.forEach(cinema => {
            if(cinema.movieId === selectedMovie.id){
                loadLocations.forEach(location => {
                    if(location.locationId === cinema.locationId){
                        locations.push({
                            value: location.locationId,
                            label: location.locationName
                        })
                    }
                })
            }
        })
        console.log(loadLocations);
        console.log(selectedMovie);
        setFilteredLocations(locations);
    }, []);
    const goBack = () => {
        navigate('/movieDetail');
    }

    const onChangeDate = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const getOptions = () => {

    }

    return (
        <div className={"bookingContainer"}>
            <nav className={"bookingNav"}>
                <img src={ticketwavelogo} alt="TicketWave Logo" className="bookingLogo" />
                <div className="user-icon">
                    <UserOutlined />
                </div>
            </nav>
            <div className={"bookingPoster"}>
                <Image preview={false} src={`${selectedMovie.imageUrlLandscape}`} className={"bookingImg"}/>
            </div>
            <div className={"bookingDetailsContainer"}>
                <div className={"bookingDetails"}>
                    {selectedMovie.movieTitle}
                </div>
                <div className={"bookingPrice"}>
                    400 PHP
                </div>
                <div className={"cinemaLocation"}>
                    Cinema
                    <br/>
                    <Select defaultValue={"Choose Location"} className={"locationDropdown"}
                            onChange={handleChange} options={filteredLocations}/>
                </div>
                <div className={"availableDate"}>
                    Date
                    <br/>
                    <Radio.Group onChange={onChangeDate} defaultValue={"a"} className={"schedule"}>
                        <Radio.Button value="a">09/06</Radio.Button>
                        <Radio.Button value="b">09/07</Radio.Button>
                        <Radio.Button value="c">09/08</Radio.Button>
                        <Radio.Button value="d">09/09</Radio.Button>
                        <Radio.Button value="e">09/10</Radio.Button>
                    </Radio.Group>
                </div>
                <div className={"availableTimeSlot"}>
                    Available Time Slot
                    <br/>
                    <br/>
                    <Radio.Group className={"radio-custom"}>
                        <Radio value="A">10:00AM - 12:00PM Cinema 1</Radio>
                        <Radio value="B">01:00PM - 03:00PM Cinema 1</Radio>
                        <Radio value="C">04:00PM - 05:00PM Cinema 1</Radio>
                    </Radio.Group>
                    <center><Button style={{borderRadius: "20px"}} type={"primary"} className={"pickSeatButton"} size={"large"}>Choose seat</Button></center>
                </div>
                <div className={"bookingSeat"}>
                    3 seat/s: C4, C5, C6
                </div>
                <div className={"finalPrice"}>
                    Amount: 1200 PHP
                </div>
                <center>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"bookingCancel"} onClick={goBack} size={"large"}>Cancel</Button>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"proceedButton"} size={"large"}>Proceed</Button>
                </center>
            </div>
        </div>
    );
}