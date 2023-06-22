export default function Droplet(props) {
  let height;
  if (props.value < props.max) {
    height = (props.value / props.max) * 139 - 102; // range: -102 - 37
  } else {
    height = 100;
  }
  return (
    <div className="col">
      <svg
        width={108}
        height={148}
        viewBox="0 0 108 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4_131)">
          <path
            d="M54 143.114C40.7765 143.114 28.0945 137.879 18.7441 128.562C9.39365 119.244 4.14063 106.607 4.14062 93.4303C4.14062 63.6933 44.329 15.2678 52.544 5.6797C53.3251 4.768 54.6749 4.768 55.456 5.6797C63.671 15.2678 103.859 63.6933 103.859 93.4303C103.859 106.607 98.6063 119.244 89.2559 128.562C79.9054 137.879 67.2235 143.114 54 143.114Z"
            fill="#ffffff07"
          />
          <mask
            id="mask0_4_131"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={4}
            width={100}
            height={140}
          >
            <path
              d="M54 143.114C40.7765 143.114 28.0945 137.879 18.7441 128.562C9.39365 119.244 4.14063 106.607 4.14062 93.4303C4.14062 63.6933 44.329 15.2678 52.544 5.6797C53.3251 4.768 54.6749 4.768 55.456 5.6797C63.671 15.2678 103.859 63.6933 103.859 93.4303C103.859 106.607 98.6063 119.244 89.2559 128.562C79.9054 137.879 67.2235 143.114 54 143.114Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_4_131)">
            <ellipse
              cx={56.118}
              cy={82 - height}
              rx={80}
              ry={40}
              fill="#8CDAF3"
            />
            <ellipse
              cx={53.9963}
              cy={110 - height}
              rx={80}
              ry={40}
              fill="#75D3F0"
            />
            <ellipse
              cx={52.9354}
              cy={135 - height}
              rx={80}
              ry={40}
              fill="#5ECBEE"
            />
            <ellipse
              cx={56.118}
              cy={161 - height}
              rx={80}
              ry={40}
              fill="#46C4EC"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_4_131"
            x={0.140625}
            y={0.995926}
            width={107.719}
            height={146.118}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_131"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <span className="text droplet-overlay">
        {Math.round(props.value)}/{props.max} gal.
      </span>
    </div>
  );
}
