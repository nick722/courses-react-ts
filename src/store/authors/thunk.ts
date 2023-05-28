import axios from 'axios';
import { saveAuthorsAction } from './actions';
import { BASE_URL } from '../../services';

const getAuthors = () => async (dispatch) => {
	const url = `${BASE_URL}/authors/all`;

	try {
		const response = await axios.get(url);
		const authors = response.data.result;
		dispatch(saveAuthorsAction(authors));
	} catch (error) {
		console.log(error);
	}
};

export default getAuthors;
