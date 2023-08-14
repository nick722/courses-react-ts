import { BASE_URL } from '../../services';
import axios from 'axios';
import { saveCoursesAction } from './actions';

export const getCourses = () => async (dispatch) => {
	const url = `${BASE_URL}/courses/all`;

	try {
		const response = await axios.get(url);
		const courses = response.data.result;
		dispatch(saveCoursesAction(courses));
	} catch (error) {
		console.log(error);
	}
};
