import './../css/BookingPage.css'
import React, {useEffect, useState} from "react";
import {Button, Image, Radio, Select,  Modal} from "antd";
import {useNavigate} from "react-router-dom";
import SeatPicker from "../components/SeatPicker"
import NavBar from "../components/NavBar";
import {useSelector} from "react-redux";

export const BookingPage = () => {
const [seatReserved, setSeatReserved] = useState([]);
    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);
    const loadLocations = useSelector(state => state.movieSlice.cinemaLocations);
    const loadCinemas = useSelector(state => state.movieSlice.cinemas);
    const loadSchedules = useSelector(state => state.movieSlice.movieSchedules);
    const navigate = useNavigate();
    const [filteredLocations, setFilteredLocations] = useState([]);

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let showingDates = [];

    useEffect(() => {
        let locations = [];
        let timeSlot = [];
        let cinemaName = "";
        let startTime = "";
        let endTime = "";
        loadCinemas.forEach(cinema => {
            if (cinema.movieId === selectedMovie.id) {
                loadLocations.forEach(location => {
                    if (location.locationId === cinema.locationId) {
                        locations.push({
                            value: location.locationId,
                            label: location.locationName
                        })
                    }
                })

                loadSchedules.forEach(schedule => {
                    if (cinema.cinemaId === schedule.cinemaId) {
                          timeSlot.push(`${cinema.cinemaName}`)
                    }
                })
            }
        })
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
const createDates = () => {
        let index = 0;
        while (index < 5) {
            index += 1;
            let newDate = date + index
            newDate = `${month}/${newDate - 1}`;
            showingDates.push(newDate);
        }
    }
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);    
    const showModal = () => {
        setOpen(true);
  };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        }, 1500);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };


    return (
        <div className={"bookingContainer"}>
            {createDates()}
            <NavBar/>
            <div className={"bookingPoster"}>
                <Image preview={false} src={`${selectedMovie.imageUrlLandscape}`} className={"bookingImg"}/>
            </div>
            <div className={"bookingDetailsContainer"}>
                <div className={"bookingDetails"}>
                    {selectedMovie.movieTitle}
                </div>
                <div className={"bookingPrice"}>
                    PHP {selectedMovie.price}
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
                    <Radio.Group onChange={onChangeDate} defaultValue={0} className={"schedule"}>
                        {
                            showingDates.map((date, index) => {
                                return <Radio.Button value={index} className={"chooseDates"}>{date}</Radio.Button>
                            })
                        }
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
                    <center><Button 
                                style={{borderRadius: "20px"}} 
                                type={"primary"} 
                                className={"pickSeatButton"} 
                                onClick={showModal}
                                size={"large"}>Choose Seat/s
                            </Button></center>
                </div>
                <div className={"bookingSeat"}>
                    3 seat/s: C4, C5, C6
                </div>
                <div className={"finalPrice"}>
                    Amount: 1200 PHP
                </div>
                <center>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"bookingCancel"} onClick={goBack}
                            size={"large"}>Cancel</Button>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"proceedButton"}
                            size={"large"}>Proceed</Button>
                </center>
                <Modal
                    title="Seat Reservation"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    className=".custom-modal-seat-picker" 
                    style={{ minWidth: "50%", maxWidth: "80%" }}  
                    >
                    <div className="">
                        <SeatPicker />
                    </div>
                </Modal>

            </div>
        </div>
    );
}