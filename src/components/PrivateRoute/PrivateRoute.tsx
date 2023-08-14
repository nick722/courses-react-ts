import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/user/selectors';
import { checkIFAdmin } from '../../helpers/checkIFAdmin';

const PrivateRoute = ({ children }) => {
	const userEmail = useSelector(selectUserEmail);
	const isAdmin = checkIFAdmin(userEmail);

	return isAdmin ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
