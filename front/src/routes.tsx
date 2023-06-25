import { createBrowserRouter, redirect } from "react-router-dom";
import { UseAuthUser } from "./hooks/useAuth";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";

// ログイン済みでアクセス可能なもの
const guardLoader = async () => {
  const user = await UseAuthUser();
  console.log(user);
  return user.length ? true : redirect("/login");
};

// ログインしていない時のみアクセス可能
const guestLoader = async () => {
  const user = await UseAuthUser();
  console.log(user);
  return user.length ? redirect("/") : true;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    loader: guardLoader,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: guestLoader,
  },
]);
