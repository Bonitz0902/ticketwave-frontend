import './../css/BookingPage.css'
import React, {useEffect, useState} from "react";
import {Button, Image, Radio, Select} from "antd";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import NavBar from "../components/NavBar";

export const BookingPage = () => {

    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);
    const loadLocations = useSelector(state => state.movieSlice.cinemaLocations);
    const loadCinemas = useSelector(state => state.movieSlice.cinemas);
    const loadSchedules = useSelector(state => state.movieSlice.movieSchedules);
    const navigate = useNavigate();
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [availableTs, setAvailableTs] = useState([]);
    const [cinemaLoc, setCinemaLoc] = useState(0);

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let showingDates = [];
    let timeSlot = [];

    useEffect(() => {
        let locations = [];

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
                    if (cinema.cinemaId === schedule.cinema.cinemaId) {
                        timeSlot.push(`${schedule.startTime} - ${schedule.endTime} ${cinema.cinemaName}`)
                        console.log(timeSlot);
                        setAvailableTs(timeSlot);
                    }
                })
            }

            console.log(loadSchedules);
            console.log('test');
        })
        setFilteredLocations(locations);
    }, []);
    const goBack = () => {
        navigate('/movieDetail');
    }

    const gcash = () => {
        navigate('/gcash');
    }

    const bdo = () => {
        navigate('/bankTransfer');
    }

    const proceedReceipt = () => {
        navigate('/transaction');
    }


    const onChangeDate = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }

    const handleChange = (value) => {
        setCinemaLoc(value);
        console.log(`selected ${value}`);
        console.log(value);
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
                        {
                            loadSchedules.filter(sched => sched.cinema.cinemaId === cinemaLoc).map((schedCinema, index) =>
                            <div key={index}>
                                <Radio value={index}>{schedCinema.startTime} - {schedCinema.endTime} {schedCinema.cinema.cinemaName}</Radio>
                            </div>
                        )}
                    </Radio.Group>
                    <center><Button style={{borderRadius: "20px"}} type={"primary"} className={"pickSeatButton"}
                                    size={"large"}>Choose seat</Button></center>
                        <span id="paymentBook">PAYMENT</span>
                        <Button style={{borderRadius: "20px"}} type={"primary"} 
                        onClick={gcash}
                        className={"gcashButton"} 
                        size={"large"}>GCASH</Button>
                        <Button style={{borderRadius: "20px"}} type={"primary"} 
                        onClick={bdo}
                        className={"bankButton"} 
                        size={"large"}>BDO</Button>
                    </center>
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
            </div>
        </div>
    );
}