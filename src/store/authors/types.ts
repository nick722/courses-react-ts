export type AuthorsType = {
	id: string;
	name: string;
};

export enum AuthorsActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	DELETE_AUTHOR = 'DELETE_AUTHOR',
	ADD_AUTHOR = 'ADD_AUTHOR',
}

export interface SaveAuthors {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorsType[];
}

export interface AddAuthor {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorsType;
}

export interface DeleteAuthor {
	type: AuthorsActionTypes.DELETE_AUTHOR;
	payload: string;
}

export type AuthorsAction = SaveAuthors | AddAuthor | DeleteAuthor;
