import React from 'react';
import { NameCardData } from './NameCardData';

const nameCard = [{ name: 'Jeremy Robson', backgroundColour: 'hsl(246, 80%, 60%)' }];

export const NameCardContainer = () => {
	return (
		<section>
			{nameCard.map(personData => (
				<NameCardData key={personData.name} personData={personData} />
			))}
		</section>
	);
};
