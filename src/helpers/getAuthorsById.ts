import { Author } from '../types';

const getAuthorsById = (
	courseAuthorsIds: string[],
	allAuthors: Author[]
): string =>
	courseAuthorsIds
		.map((courseAuthorId) =>
			allAuthors
				.filter((author) => {
					return author.id === courseAuthorId;
				})
				.map((authObj) => authObj.name)
		)
		.join(', ');

export default getAuthorsById;
