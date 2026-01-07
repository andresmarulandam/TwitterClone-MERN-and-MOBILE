import React, { useContext } from 'react';
import UserContext from './UserContext';
import { Navigate } from 'react-router';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/home" />;
}
