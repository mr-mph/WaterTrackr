export default function Slider(props) {
  let width;
  if (props.value < props.max) {
    width = (props.value / props.max) * 151 - 124; // range: -124 - 27
  } else {
    width = 27;
  }

  return (
    <div className="card row slider front">
      <svg
        width={150}
        height={25}
        viewBox="0 0 150 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_123_256"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={150}
          height={25}
        >
          <rect width={150} height={25} rx={5} fill="white" />
        </mask>
        <g mask="url(#mask0_123_256)">
          <ellipse
            cx={48.7011}
            cy={-40 - width}
            rx={69.7804}
            ry={22.4194}
            transform="rotate(90 48.7011 12.5633)"
            fill="#8CDAF3"
          />
          <ellipse
            cx={29.3589}
            cy={-20 - width}
            rx={69.7804}
            ry={22.4194}
            transform="rotate(90 29.3589 9.97889)"
            fill="#75D3F0"
          />
          <ellipse
            cx={8.25821}
            cy={0 - width}
            rx={69.7804}
            ry={22.4194}
            transform="rotate(90 8.25821 8.68665)"
            fill="#5ECBEE"
          />
          <ellipse
            cx={-12.8424}
            cy={25 - width}
            rx={69.7804}
            ry={22.4194}
            transform="rotate(90 -12.8424 12.5633)"
            fill="#46C4EC"
          />
          <g
            style={{
              mixBlendMode: "multiply",
            }}
          ></g>
        </g>
      </svg>
      <span className="text slider-overlay">
        {Math.round(props.value)}/{props.max} gal.
      </span>
    </div>
  );
}
