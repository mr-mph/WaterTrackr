export default function WeekdayDisplay(props) {
  let height;
  if (props.value < props.max) {
    height = (props.value / props.max) * 100; // range: -124 - 27
  } else {
    height = 100;
  }
  return (
    <div className="card col front weekday">
      <svg
        className="card front"
        width={10}
        height={100}
        viewBox="0 0 10 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_242_79)">
          <rect
            width={10}
            height={height}
            y={100 - height}
            rx={4.5}
            fill="url(#paint0_linear_242_79)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_242_79"
            x1={4.5}
            y1={0}
            x2={4.5}
            y2={100}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74D3F1" />
            <stop offset={1} stopColor="#46C4EC" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text">{props.day}</span>
    </div>
  );
}
