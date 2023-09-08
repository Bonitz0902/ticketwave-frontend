import { useState, useEffect } from "react";
import DrawGrid from "./DrawGrid";
import "../css/SeatPicker.css";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useApis } from "../hooks/useHooks";
import { getAllAvailableSeats } from './../api/dashboardApi';

export default function SeatPicker(props) {
  const { getAllSeats, bookMultipleSeat, setSelectedSeats } = useApis();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("%%%%%%%%%%%%%%%", props)


  // useEffect(() => {
  //   console.log("something")
  //   getAllSeats();
  // }, []);

  const passSeat = (id, seatingNumber) => {

    console.log(id,seatingNumber);

    navigate('/booking', {

        state: { id, seatingNumber }, 

    });

}

  const seats = useSelector((state) => state.seatSlice.seatSlice);
  const selectedSeats = useSelector((state) => state.seatSlice.selectedSeats);
  const availableSeats = seats.filter((seat) => seat.available === true);
  const initialSeatNumbers = seats.map((seat) => seat.seatNumber);
  const availableSeatNumbers = availableSeats.map((seat) => seat.seatNumber);
  const availableSeatIds = availableSeats.map((seat) => seat.seatingId);
  console.log("initial ", initialSeatNumbers);

  const [seat, setSeat] = useState(initialSeatNumbers);
  const [seatAvailable, setSeatAvailable] = useState(availableSeatNumbers);
  const [seatReserved, setSeatReserved] = useState([]);
  const [seatReservedId, setSeatReservedID] = useState([availableSeatIds]);

  
  // console.log(seats)
  console.log([...seatReserved])


  function onClickData(clickedSeat) {
    if (seatReserved.includes(clickedSeat)) {
      setSeatAvailable([...seatAvailable, clickedSeat]);
      props.updateSelectedSeats(seatReserved.filter((res) => res !== clickedSeat));
      setSeatReserved(seatReserved.filter((res) => res !== clickedSeat));
    } else {
      setSeatReserved([...seatReserved, clickedSeat]);
      props.updateSelectedSeats([...seatReserved, clickedSeat])
      passSeat(seat.filter((res) => res.seatingNumber === clickedSeat).seatingId, clickedSeat);
      setSeatAvailable(seatAvailable.filter((res) => res !== clickedSeat));
    }
  }

  return (
    <div>
      <h2 className = "center-text-screen">SCREEN</h2>
      <DrawGrid
        seat={seat}
        available={seatAvailable}
        reserved={seatReserved}
        ids={seatReservedId}
        onClickData={onClickData}
      />
    </div>
  );
}
