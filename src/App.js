import Login from "./components/Login";
import Signup from "./components/Signup";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App(){

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
  ]);
  

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App