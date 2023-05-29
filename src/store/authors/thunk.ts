import axios from 'axios';
// import { saveAuthorsAction } from './actions';
import { BASE_URL } from '../../services';
import { saveAuthors } from './authorsSlice';

const getAuthors = () => async (dispatch, getState) => {
	const url = `${BASE_URL}/authors/all`;

	try {
		const response = await axios.get(url);
		const authors = response.data.result;
		dispatch(saveAuthorsAction(authors));

		// dispatch(saveAuthors(getState(), authors));
		// dispatch(saveAuthors(authors));
	} catch (error) {
		console.log(error);
	}
};

export default getAuthors;
