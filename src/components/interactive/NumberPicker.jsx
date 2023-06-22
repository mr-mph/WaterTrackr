import IconButton from "./IconButton";

export default function NumberPicker(props) {
	const handleClick = (type) => {
		if (type == "add") props.handleChange(props.value + 1);
		else if (type == "subtract") props.handleChange(props.value - 1);
	};

	return (
		<div className="row card mid-front">
			<span className="text">{props.text}</span>
			<div className="row card front">
				<IconButton
					handleClick={handleClick}
					type="subtract"
					pressed={props.pressed}
				/>
				<input
					className="text input"
					value={props.value}
					onChange={(e) => props.handleChange(e.target.value)}
				/>
				<IconButton
					handleClick={handleClick}
					type="add"
					pressed={props.pressed}
				/>
			</div>
		</div>
	);
}
