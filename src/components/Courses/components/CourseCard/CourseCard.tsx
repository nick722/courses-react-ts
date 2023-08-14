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
	const userEmail = useSelector(selectUserEmail);
	const isRoleAdmin = checkIfAdmin(userEmail);

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
						<ShowCourseButton />
					</Link>
					{isRoleAdmin && (
						<>
							<DeleteCourseButton courseId={id} />
							<UpdateCourseButton />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
