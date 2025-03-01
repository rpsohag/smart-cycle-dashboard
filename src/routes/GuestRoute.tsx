
import { Navigate } from 'react-router';
import Login from "../pages/Login";
import Dashboard from '../pages/Dashboard';
import { useEffect, useState } from 'react';
import { checkAuth } from '../utils/authCheck';

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = await checkAuth();
      setIsAuthenticated(authStatus);
    };
    verifyAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const GuestGuard = ({ children }: { children: React.ReactElement }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = await checkAuth();
      setIsAuthenticated(authStatus);
    };
    verifyAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

const GuestRouter = [
    {
        path: "/",
        element: (
            <AuthGuard>
                <Dashboard />
            </AuthGuard>
        ),
    },
    {
        path: "/login",
        element: (
            <GuestGuard>
                <Login />
            </GuestGuard>
        ),
    }
];

export default GuestRouter;
