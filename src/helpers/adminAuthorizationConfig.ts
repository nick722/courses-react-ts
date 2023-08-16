import { getBearerToken } from './getBearerToken';

const bearerToken = getBearerToken();

export const getAdminAuthorizationConfig = () => ({
	headers: {
		Authorization: bearerToken,
	},
});
