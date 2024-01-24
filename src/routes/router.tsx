import { AuthLayout} from "@/layout";
import { HomePage, LoginPage, RegisterPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "./protect.route";

const router = createBrowserRouter([
  {
    path:'/',
    element: <ProtectRoute/>,
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