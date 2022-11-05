import Login from "./components/Login";
import Signup from "./components/Signup";
import MarketNavbar from "./components/market setup/MarketNavbar";

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
    {
      path: "/setup",
      element: <MarketNavbar/>,
    },
  ]);
  

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App