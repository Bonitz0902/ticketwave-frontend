import AvailableList from "./AvailableList";
import ReservedList from "./ReservedList";

const DrawGrid = (props) => {
  const onClickSeat = (seat) => {
    props.onClickData(seat);
  };

  return (
    <div className="container">
      <table className="grid">
        <tbody>
          <tr>
            {props.seat.map((row) => (
              <td
                className={
                  props.reserved.indexOf(row) > -1 ? "reserved" : "available"
                }
                key={row}
                onClick={(e) => onClickSeat(row)}
              >
                {row}{" "}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <AvailableList available={props.available} />
      <ReservedList reserved={props.reserved} /> 
    </div>
  );
};

export default DrawGrid;
