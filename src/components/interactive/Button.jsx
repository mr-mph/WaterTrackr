export default function Button(props) {
	return (
		<button className="button front" onClick={props.handleClick}>
			<span className="text">{props.text}</span>
		</button>
	);
}
