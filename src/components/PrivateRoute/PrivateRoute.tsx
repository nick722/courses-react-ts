import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../store/user/selectors';
import { checkIfAdmin } from '../../helpers/checkIfAdmin';

const PrivateRoute = ({ children }) => {
	const userEmail = useSelector(selectUserEmail);
	const isAdmin = checkIfAdmin(userEmail);

	return isAdmin ? children : <Navigate to={'/login'} />;
};

export default PrivateRoute;
