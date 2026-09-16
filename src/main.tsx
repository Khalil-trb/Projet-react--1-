import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserList from "./pages/UserList.tsx";
import Header from "./components/header.tsx";
import { Outlet } from 'react-router-dom';
import UserName from "./pages/Username.tsx";

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
  ]
 }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
