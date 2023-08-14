import React from 'react';
import { Navigate } from 'react-router-dom';
import { getBearerToken } from '../../helpers/getBearerToken';

const PrivateRoute = ({ children }) => {
	const auth = getBearerToken();

	return auth ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
