import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number;
}

interface RootState {
  app: {
    token: string | null;
  };
}

interface PrivateRouteProps {
  children: ReactNode; // Type for children
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = useSelector((state: RootState) => {
    console.log(state);
    return state.app.token;
  });
  // console.log(token,'---------token')

  const isAuthenticated = (): boolean => {
    if (!token) return false;

    try {
      const { exp } = jwtDecode<JwtPayload>(token); // Decode token to get expiry time
      if (Date.now() >= exp * 1000) {
        return false; // Token expired
      }
      return true; // Token is valid
    } catch (error) {
      return false; // Invalid token format
    }
  };

  return isAuthenticated() ? children : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;
