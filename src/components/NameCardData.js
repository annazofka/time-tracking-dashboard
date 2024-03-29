import './NameCardData.css';

export const NameCardData = props => {
	const {
		personData: { name, backgroundColour },
	} = props;

	return (
		<section className='name-container'>
			{/* <div style={{ height: 100, backgroundColor: backgroundColour }}> */}
			<div className='name-and-background' style={{ backgroundColor: backgroundColour }}>
				<img src='assets/image-jeremy.png' alt='profilePic' />
				<div className='user-name'>
					<h2>Report for</h2>
					<h2>{name}</h2>
				</div>
			</div>
			<div className='period-metrics'>
				<button type='button'>Daily</button>
				<button type='button'>Weekly</button>
				<button type='button'>Monthly</button>
			</div>
		</section>
	);
};
