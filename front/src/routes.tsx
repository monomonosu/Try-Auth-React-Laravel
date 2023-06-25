import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<DashboardPage />
    },
    {
        path: '/login',
        element:<LoginPage />
    },
]) 