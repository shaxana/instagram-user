import Home from "../pages/Home";
import Login  from "../pages/Login";
import Register from "../pages/Register";
import UserRoot from "../userRoot/UserRoot";
export const routes = [
   
        {
          path: "/",
          element: <UserRoot />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
        {
          path: "*",
          element: <div>no page</div>,
        },
      
]