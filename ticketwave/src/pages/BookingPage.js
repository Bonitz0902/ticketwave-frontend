import './../css/BookingPage.css'
import React, { useEffect, useState } from "react";
import {Button, Image, Radio, Select,  Modal} from "antd";
import {useNavigate, useLocation} from "react-router-dom";
import SeatPicker from "../components/SeatPicker"
import NavBar from "../components/NavBar";
import {useSelector} from "react-redux";
import BankTransfer from './BankTransfer';
import { Transaction } from './Transaction';
import { useApis } from "../hooks/useHooks";
import {setSelectedSeats} from '../components/seatSlice';

export const BookingPage = () => {
    const { getAllSeats } = useApis();

    const location = useLocation();
    const { id, seatingNumber } = location.state || {};
    const selectedMovie = useSelector(state => state.movieSlice.selectedMovie);
    // const selectedSeats = useSelector(state => state.seatSlice.selectedSeats);
    const [selectedSeats, setSelectedSeats] = useState([]);
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
        console.log("something")
        getAllSeats();
      }, []);

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
                        timeSlot.push(`${ schedule.startTime } - ${ schedule.endTime } ${ cinema.cinemaName }`)
                        setAvailableTs(timeSlot);
                    }
                })
            }

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

    const proceedReceipt = (image, title) => {
        console.log(image,title);
        navigate('/transaction', {
            state: { image, title }, // Pass the image as a query parameter
           
        });
        
    }


    const onChangeDate = (e) => {
        console.log(`radio checked:${ e.target.value }`);
    }

    const handleChange = (value) => {
        setCinemaLoc(value);
        console.log("cinemaLoc", cinemaLoc, value);

    };
const createDates = () => {
        let index = 0;
        while (index < 5) {
            index += 1;
            let newDate = date + index
            newDate = `${ month }/${ newDate - 1 }`;
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
    const updateSelectedSeats = (selectedSeats) => {
        setSelectedSeats(selectedSeats);
    };

    const renderTimeSlot = () => {
        console.log("cinemacinema", cinemaLoc)
        if(cinemaLoc === 0){
            console.log("asdasd");
            return(<span style={{fontSize:"12px"}}> Please Choose Cinema Location. </span>)
        } else {
        return loadSchedules.filter(sched => sched.cinema.cinemaId === cinemaLoc)
            .map((schedCinema, index) =>
                (<div key={index}>
                        <Radio value={index}>{schedCinema.startTime} - {schedCinema.endTime} {schedCinema.cinema.cinemaName}</Radio>
                </div>));
        };
    };

    return (
        <div className={"bookingContainer"}>
            {createDates()}
            <NavBar />
            <div className={"bookingPoster"}>
                <Image preview={false} src={`${ selectedMovie.imageUrlLandscape }`} className={"bookingImg"} />
            </div>
            <div className={"bookingDetailsContainer"}>
                <div className={"bookingDetails"}>
                    {selectedMovie.movieTitle}
             
                </div>
                <div className={"bookingPrice"}>
                    PHP {selectedMovie.price}
                </div>
                <div className={"cinemaLocation"}>
                    Cinema Location
                    <br />
                    <Select defaultValue={"Choose Location"} className={"locationDropdown"}
                        onChange={handleChange} options={filteredLocations} />
                </div>
                <div className={"availableDate"} >
                    Date
                    <br />
                    <Radio.Group onChange={onChangeDate} defaultValue={0} className={"schedule"}>
                        {
                            showingDates.map((date, index) => {
                                return <Radio.Button key={index} value={index} className={"chooseDates"}>{date}
                                </Radio.Button>
                            })
                        }
                    </Radio.Group>
                </div>
                <div className={"availableTimeSlot"}>
                    Available Time Slot
                    <br />
                    <br />
                    <Radio.Group className={"radio-custom"}>
                        {renderTimeSlot()}
                                <div key={index}>
                                    <Radio value={index}>{schedCinema.startTime} - {schedCinema.endTime} {schedCinema.cinema.cinemaName}</Radio>
                                </div>
                            )}
                    </Radio.Group>
                    <center>
                        <Button 
                                id="pickSeatButton"
                                style={{borderRadius: "20px"}} 
                                type={"primary"} 
                                className={"pickSeatButton"} 
                                onClick={showModal}
                                size={"large"}>Choose Seat/s
                            </Button>
                        <span id="paymentBook">PAYMENT</span>
                        <Button style={{borderRadius: "20px",
                                        marginLeft: "40px",
                        }} type={"primary"} 
                            onClick={gcash}
                            className={"gcashButton"}
                            size={"large"}>GCASH</Button>
                        <Button style={{
                            borderRadius: "20px",
                            marginTop: "5px",
                            marginLeft: "175px"
                        }} type={"primary"} 
                            onClick={bdo}
                            className={"bankButton"}
                        size={"large"}>BDO debit</Button>
                    </center>
                </div>
                <div className={"bookingSeat"}>
                    {selectedSeats.length} seat/s: {selectedSeats.join(", ")}
                </div>
                <div className={"finalPrice"}>
                    Amount: 1200 PHP
                </div>
                <center>

                    <Button type={"primary"} style={{ borderRadius: "20px" }} className={"bookingCancel"} onClick={goBack}
                        size={"large"}>Cancel</Button>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"proceedButton"} 
                    onClick={() => proceedReceipt(selectedMovie.imageUrlLandscape, selectedMovie.movieTitle)}
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
                        <SeatPicker 
                        updateSelectedSeats = {updateSelectedSeats} />
                    </div>
                </Modal>

            </div>
        </div>
    );
}