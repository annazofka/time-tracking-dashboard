export const Metric = props => {
	console.log(props.title);
	const {
		metricData: { title, time, lastWeekTime, backgroundColour },
	} = props;

	return (
		<section>
			<div style={{ height: 20, backgroundColor: backgroundColour }}></div>
			<h2>{title}</h2>
			<p>{time}</p>
			<p>{lastWeekTime}</p>
		</section>
	);
};
