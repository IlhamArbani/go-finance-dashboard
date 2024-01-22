import { AuthLayout } from "@/layout";
import { LoginPage, RegisterPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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