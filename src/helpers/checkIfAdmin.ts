import { ADMIN } from '../admin-credentials';

export const checkIfAdmin = (userEmail) => {
	return userEmail === ADMIN.EMAIL;
};
