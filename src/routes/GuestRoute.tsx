
import { Navigate } from 'react-router';
import Login from "../pages/Login";
import Home from '../pages/Home';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const GuestGuard = ({ children }: { children: React.ReactElement }) => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const GuestRouter = [
    {
        path: "/",
        element: <Home />,
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
