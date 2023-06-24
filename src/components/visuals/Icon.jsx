export default function Icon(props) {
  const source = `assets/${props.pressed ? "white" : "blue"}_${props.type}.svg`;

  return <img className="icon" src={source} />;
}
