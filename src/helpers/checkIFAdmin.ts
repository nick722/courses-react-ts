import { ADMIN } from '../admin-credentials';

export const checkIFAdmin = (userEmail) => {
	return userEmail === ADMIN.EMAIL;
};
