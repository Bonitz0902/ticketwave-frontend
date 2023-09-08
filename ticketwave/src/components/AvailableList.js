export default function AvailableList(props) {
  const seatCount = props.available.length;
  return (
    <div className="left">
      <h4>
        Available Seat/s: ({seatCount === 0 ? "No seats available" : seatCount})
      </h4>
    </div>
  );
}
