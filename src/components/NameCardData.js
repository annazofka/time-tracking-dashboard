export const NameCardData = props => {
	const {
		personData: { name, backgroundColour },
	} = props;

	return (
		<section>
			<div style={{ height: 100, backgroundColor: backgroundColour }}></div>
			<h2>Report for {name}</h2>
			<p>Daily</p>
			<p>Weekly</p>
			<p>Monthly</p>
		</section>
	);
};
