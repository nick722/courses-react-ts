import React from 'react';

import './CourseCard.scss';
import Button from '../../../common/Button/Button';

const BUTTON_TEXT = 'Show course';

interface CourseCardProps {
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authors: string;
}

const formatDuration = (durationInMin: number): string => {
	const hours = Math.floor(durationInMin / 60);
	const minutes = durationInMin % 60;
	const formatedHours = hours > 10 ? hours : `0${hours}`;
	const formatedMinutes = minutes > 10 ? minutes : `0${minutes}`;
	const formatedHoursStr = hours === 1 ? 'hour' : 'hours';

	return `${formatedHours}:${formatedMinutes} ${formatedHoursStr}`;
};
const formatedDate = (dateWithSlashes: string): string =>
	dateWithSlashes.replace(/\//g, '.');
const CourseCard = ({
	authors,
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
				<p>
					<span className='label'>Authors</span>: {authors}
				</p>
				<p>
					<span className='label'>Duration</span>: {formatDuration(duration)}
				</p>
				<p>
					<span className='label'>Created</span>: {formatedDate(creationDate)}
				</p>
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
