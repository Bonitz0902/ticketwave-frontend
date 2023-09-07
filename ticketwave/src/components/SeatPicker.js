import { useState } from "react";
import DrawGrid from "./DrawGrid";
import "../css/SeatPicker.css";

export default function SeatPicker() {
  const [seat, setSeat] = useState([
    "A1","A2","A3","A4","A5",
    "B1","B2","B3","B4","B5",
    "C1","C2","C3","C4","C5",
  ]);
  const [seatAvailable, setSeatAvailable] = useState([
    "A1","A2","A3","A4","A5",
    "B1","B2","B3","B4","B5",
    "C1","C2","C3","C4","C5",
  ]);
  const [seatReserved, setSeatReserved] = useState([]);

  function onClickData(clickedSeat) {
    if (seatReserved.includes(clickedSeat)) {
      setSeatAvailable([...seatAvailable, clickedSeat]);
      setSeatReserved(seatReserved.filter((res) => res !== clickedSeat));
    } else {
      setSeatReserved([...seatReserved, clickedSeat]);
      setSeatAvailable(seatAvailable.filter((res) => res !== clickedSeat));
    }
  }

  return (
    <div>
      <DrawGrid
        seat={seat}
        available={seatAvailable}
        reserved={seatReserved}
        onClickData={onClickData}
      />
    </div>
  );
}
