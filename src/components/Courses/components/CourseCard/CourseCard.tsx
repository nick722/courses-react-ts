import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../common/Button/Button';
import formatCourseDuration from '../../../../helpers/formatCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';

import './CourseCard.scss';
import { Author } from '../../../../types';

const SHOW_COURSE_BUTTON_TEXT = 'Show course';

interface CourseCardProps {
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authorsNames: string;
	id: string;
}

const CourseCard = ({
	authorsNames,
	title,
	description,
	duration,
	creationDate,
	id,
}: CourseCardProps) => {
	return (
		<div className='course-card'>
			<div className='course-card__left-side'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='course-card__right-side'>
				<p>
					<span className='course-card__label'>Authors</span>: {authorsNames}
				</p>
				<p>
					<span className='course-card__label'>Duration</span>:{' '}
					{formatCourseDuration(duration)}
				</p>
				<p>
					<span className='course-card__label'>Created</span>:{' '}
					{formatCreationDate(creationDate)}
				</p>
				<div className='course-card__buttons'>
					<Link to={`/courses/${id}`}>
						<Button
							className='show-course-button'
							buttonText={SHOW_COURSE_BUTTON_TEXT}
						/>
					</Link>
					<Button buttonText='X' />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
