export default function Switch(props) {
	const rows = [];
	for (const i in props.options) {
		rows.push(
			<div
				onClick={() => {
					if (props.options[i] != props.selected)
						props.handleSwitch(props.options[i]);
				}}
				className={`switch ${
					props.selected == props.options[i] ? "selected" : "unselected"
				}`}
				key={i}
			>
				<h4
					className={`text switch ${
						props.selected == props.options[i] ? "text-selected" : ""
					}`}
				>
					{props.options[i]}
				</h4>
			</div>
		);
	}
	return <div className="row card front switch-container">{rows}</div>;
}
