import './Metric.css';

export const Metric = props => {
	const {
		metricData: { title, time, lastWeekTime, backgroundColour, imgFile },
	} = props;

	return (
		<section className='single-metric-container'>
			<div className='colour-label' style={{ backgroundColor: backgroundColour }}>
				<img src={imgFile} alt='background-image' />
			</div>
			<div className='single-metric-card'>
				<h2>{title}</h2>
				<img className='three-dots' src='assets/icon-ellipsis.svg' alt='three-dots' />
				<p>{time}</p>
				<p>{lastWeekTime}</p>
			</div>
		</section>
	);
};
