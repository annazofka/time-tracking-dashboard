import './Metric.css';

export const Metric = props => {
	const {
		metricData: { title, time, lastWeekTime, backgroundColour },
	} = props;

	return (
		<section className='single-metric-container'>
			<div style={{ height: 20, backgroundColor: backgroundColour }}></div>
			<h2>{title}</h2>
			<p>{time}</p>
			<p>{lastWeekTime}</p>
		</section>
	);
};
