import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserList from "./pages/UserList.tsx";
import Header from "./components/header.tsx";
import { Outlet } from 'react-router-dom';
import UserName from "./pages/Username.tsx";
import RecipeDetail from "./pages/Recipe.tsx";
import Recipe from "./pages/Recipe.tsx";

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
      }
  ]
 }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
