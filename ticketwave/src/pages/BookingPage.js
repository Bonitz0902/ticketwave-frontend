import './../css/BookingPage.css'
import ticketwavelogo from "../ticketwavelogo.png";
import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {Image, Select, Radio, Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const BookingPage = () => {

    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/movieDetail');
    }

    const onChangeDate = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

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
                    <Select defaultValue={"SM MOA IMAX THEATER"} className={"locationDropdown"} onChange={handleChange}
                            options={[
                                {
                                    value: 'SM MOA IMAX THEATER',
                                    label: 'SM MOA IMAX THEATER',
                                },
                                {
                                    value: 'SM Makati',
                                    label: 'SM Makati',
                                },
                                {
                                    value: 'SM Manila',
                                    label: 'SM Manila',
                                }]}/>
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