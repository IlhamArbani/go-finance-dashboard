import { AuthLayout, HomeLayout } from "@/layout";
import { HomePage, LoginPage, RegisterPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }
    ],
  },
  {
    path: '/',
    element: <AuthLayout/>,
    children: [
      {
        path:'login',
        element: <LoginPage/>
      },
      {
        path:'register',
        element: <RegisterPage/>
      },
    ]
  },
]);

export default router