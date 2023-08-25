import React from 'react';
import { Link } from 'react-router-dom';
import formatCourseDuration from '../../../../helpers/formatCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import ShowCourseButton from './ShowCourseButton/ShowCourseButton';
import DeleteCourseButton from './DeleteCourseButton/DeleteCourseButton';
import UpdateCourseButton from './UpdateCourseButton/UpdateCourseButton';
import './CourseCard.scss';
import { checkIfAdmin } from '../../../../helpers/checkIfAdmin';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../../../store/user/selectors';
import getAuthorsById from '../../../../helpers/getAuthorsById';
import { selectAuthors } from '../../../../store/authors';

interface CourseCardProps {
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authorsIds: string[];
	id: string;
}

const CourseCard = ({
	authorsIds,
	title,
	description,
	duration,
	creationDate,
	id,
}: CourseCardProps) => {
	const userEmail = useSelector(selectUserEmail);
	const allAuthors = useSelector(selectAuthors);
	const isRoleAdmin = checkIfAdmin(userEmail);

	return (
		<div className='course-card'>
			<div className='course-card__left-side'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='course-card__right-side'>
				<p data-testid='authorsList'>
					<span className='course-card__label'>Authors</span>:{' '}
					{getAuthorsById(authorsIds, allAuthors)}
				</p>
				<p>
					<span className='course-card__label'>Duration</span>
					<span data-testid='duration'>{formatCourseDuration(duration)}</span>
				</p>
				<p>
					<span className='course-card__label'>Created</span>
					<span data-testid='creationDate'>
						{formatCreationDate(creationDate)}
					</span>
				</p>
				<div className='course-card__buttons'>
					<Link to={`/courses/${id}`}>
						<ShowCourseButton />
					</Link>
					{isRoleAdmin && (
						<>
							<DeleteCourseButton id={id} />
							<UpdateCourseButton id={id} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
