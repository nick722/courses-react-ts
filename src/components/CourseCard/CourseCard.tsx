import React from 'react';

import './CourseCard.scss';
import Button from '../Button/Button';

const BUTTON_TEXT = 'Show course';

interface CourseCardProps {
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authors: string[];
}

const formatDuration = (minutes) => {
	return minutes / 60;
};

const CourseCard = ({
	title,
	description,
	duration,
	creationDate,
}: CourseCardProps) => {
	return (
		<div className='course-card'>
			<div className='course-card__left-side'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='course-card__right-side'>
				<p>Authors:</p>
				<p>Duration: {formatDuration(duration)}</p>
				<p>Created: {creationDate}</p>
				<Button
					buttonText={BUTTON_TEXT}
					onClick={() => {
						/*do nothing*/
					}}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
