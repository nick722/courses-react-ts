import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/user/selectors';
import { ADMIN } from '../../admin-credentials';

const PrivateRoute = ({ children }) => {
	const userEmail = useSelector(selectUserEmail);
	const isAdmin = userEmail === ADMIN.EMAIL;

	return isAdmin ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
