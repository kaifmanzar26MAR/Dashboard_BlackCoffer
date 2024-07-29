import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logistics from "../pages/Logistics";
import Employees from "../pages/Employees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/logistics",
        element:<Logistics/>
      },{
        path:"/employees",
        element:<Employees/>
      }
    ],
  },
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router