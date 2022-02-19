import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuth = true;

export default function PrivateRoute({ children, ...rest }) {
  return (
    {...rest},
    isAuth ? children : <Navigate to="/" />
  )
}

