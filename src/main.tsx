import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserList from "./pages/UserList.tsx";
import Header from "./components/header.tsx";
import { Outlet } from 'react-router-dom';
import UserName from "./pages/Username.tsx";
import Recipe from "./pages/Recipe.tsx";
import Login from "./pages/login.tsx";
import Profile from "./pages/profil.tsx";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
         path: "/",
         element: <App/>
    },
    {
     path: "/userList",
     element: <UserList/>
   },
   {
        path: "/user/:username",
        element: <UserName />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/profile/:username",
        element: <Profile/>,
      },
    ],
  }
 
]);
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
