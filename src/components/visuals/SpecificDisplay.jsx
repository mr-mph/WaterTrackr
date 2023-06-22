import Slider from "./Slider";

export default function SpecificDisplay(props) {
  return (
    <div className="card row front specific-display stretch">
      <span className="text" style={{ width: "140px" }}>
        {props.text}
      </span>
      <Slider value={props.value} max={props.max} />
    </div>
  );
}
