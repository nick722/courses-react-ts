import React from 'react';

import Button from '../../../common/Button/Button';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';

import './CourseCard.scss';
import { Author } from '../../../../types';

const BUTTON_TEXT = 'Show course';

interface CourseCardProps {
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authors: Author[];
}

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
					<span className='label'>Duration</span>: {getCourseDuration(duration)}
				</p>
				<p>
					<span className='label'>Created</span>:{' '}
					{formatCreationDate(creationDate)}
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
