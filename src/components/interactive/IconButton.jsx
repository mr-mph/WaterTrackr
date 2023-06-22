import { useEffect, useState } from "react";

export default function IconButton(props) {
  const [pressed, setPressed] = useState(false);

  const source = `/src/assets/${pressed ? "white" : "blue"}_${props.type}.svg`;

  useEffect(() => {
    window.addEventListener("mouseup", () => {
      setPressed(false);
    });
  }, []);

  const xStyle = {
    alignSelf: "end",
    margin: 0,
    position: "absolute",
  };

  return (
    <button
      onClick={() => props.handleClick(props.type)}
      className="button front"
      onMouseDown={() => setPressed(true)}
      style={props.type == "x" ? xStyle : {}}
    >
      <img src={source} />
    </button>
  );
}
