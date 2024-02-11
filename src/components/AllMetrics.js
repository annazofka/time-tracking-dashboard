import React from 'react';
import { Metric } from './Metric';
import './AllMetrics.css';
// import classes from './AllMetrics.modules.css';

const metrics = [
	{ title: 'Work', time: '32hrs', lastWeekTime: '36hrs', backgroundColour: 'hsl(15,100%,70%)' },
	{ title: 'Play', time: '10hrs', lastWeekTime: '8hrs', backgroundColour: 'hsl(195, 74%, 62%)' },
	{ title: 'Study', time: '4hrs', lastWeekTime: '7hrs', backgroundColour: 'hsl(348, 100%, 68%)' },
	{ title: 'Exercise', time: '4hrs', lastWeekTime: '5hrs', backgroundColour: 'hsl(145, 58%, 55%)' },
	{ title: 'Social', time: '5hrs', lastWeekTime: '10hrs', backgroundColour: 'hsl(264, 64%, 52%)' },
	{ title: 'Self Care', time: '2hrs', lastWeekTime: '2hrs', backgroundColour: 'hsl(43, 84%, 65%)' },
];

export const MetricsContainer = () => {
	return (
		<section className='metrics-container'>
			{metrics.map(metricData => (
				<Metric key={metricData.title} metricData={metricData} />
			))}
		</section>
	);
};
