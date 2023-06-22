import LoggingButton from "../interactive/LoggingButton";

export default function LoggingSection(props) {
	const calcDrink = (cups) => cups * 0.0625;

	const calcShower = (mins) => mins * 2;

	const calcFlush = (weight, amount) => amount * (weight === "Light" ? 1.5 : 3);

	const calcOther = (type, mins) => {
		if (type === "Drip") return mins * 0.001;
		else if (type === "Sink") return mins * 2;
		else if (type === "Hose") return mins * 10;
	};

	const handleLog = (log) => {
		const id = log[0].id;
		const content = log.map((obj) => obj.value);

		let gallons;
		if (id === "drink") gallons = calcDrink(...content);
		else if (id === "shower") gallons = calcShower(...content);
		else if (id === "flush") gallons = calcFlush(...content);
		else if (id === "other") gallons = calcOther(...content);

		props.handleLog({ id, gallons });
	};

	return (
		<div className="col card mid">
			<h2 className="text">Logging</h2>
			<div className="col card mid-front">
				<LoggingButton
					name="Drink"
					icon="glass"
					handleLog={handleLog}
					modal={[
						{
							text: "How much water?",
							id: "drink",
							type: "input",
							unit: "Cups",
							value: 2,
						},
					]}
				/>
				<LoggingButton
					name="Shower"
					icon="shower"
					handleLog={handleLog}
					modal={[
						{
							text: "How long?",
							id: "shower",
							type: "input",
							unit: "Minutes",
							value: 5,
						},
					]}
				/>
				<LoggingButton
					name="Flush"
					key="3"
					icon="toilet"
					handleLog={handleLog}
					modal={[
						{
							text: "What kind of flush?",
							id: "flush",
							type: "switch",
							options: ["Light", "Heavy"],
							value: "Heavy",
						},
						{
							text: "How many?",
							type: "input",
							unit: "Flushes",
							value: 1,
						},
					]}
				/>
				<LoggingButton
					name="Other"
					key="4"
					icon="plus"
					handleLog={handleLog}
					modal={[
						{
							text: "What flow rate?",
							id: "other",
							type: "switch",
							options: ["Drip", "Sink", "Hose"],
							value: "Sink",
						},
						{
							text: "How long?",
							type: "input",
							unit: "Minutes",
							value: 3,
						},
					]}
				/>
			</div>
		</div>
	);
}
