import { AuthLayout} from "@/layout";
import { FormTransactionPage, HomePage, LoginPage, ProfilePage, RegisterPage } from "@/pages";
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
      },
      {
        path: 'transaction',
        element: <FormTransactionPage/>
      },
      {
        path: 'transaction/:id',
        element: <FormTransactionPage/>
      },
      {
        path: 'profile',
        element: <ProfilePage/>
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