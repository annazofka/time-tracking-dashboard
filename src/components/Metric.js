import './Metric.css';

export const Metric = props => {
	const {
		metricData: { title, time, lastWeekTime, backgroundColour },
	} = props;

	return (
		<section className='single-metric-container'>
			<div className='colour-label' style={{ backgroundColor: backgroundColour }}></div>
			<div className='single-metric-card'>
				<h2>{title}</h2>
				<p>{time}</p>
				<p>{lastWeekTime}</p>
			</div>
		</section>
	);
};
