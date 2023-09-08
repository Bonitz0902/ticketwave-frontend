export default function ReservedList(props) {
  return (
    <div className="right">
      <h4>Chosen Seat/s: ({props.reserved.length})</h4>
      <span>
        {props.reserved.length} seat/s: 
        {props.reserved.map((res) => (
          <span className = "liClass" key={res}>{res},</span>
        ))}
      </span>
    </div>
  );
}
