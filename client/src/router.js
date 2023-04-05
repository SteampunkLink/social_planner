import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./views/ErrorPage"; 

import Main from "./views/Main"; 
import Public from "./components/Public";
import Login from "./views/Login";
import Register from "./views/Register";

import Private from "./components/Private";
import Landing from "./views/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorPage: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Main />
          },
          {
            path: "/login",
            element: <Public Component={Login} />,
          },
          {
            path: "/register",
            element: <Public Component={Register} />,
          },
          {
            path: "/landing",
            element: <Private Component={Landing} />,
          },
        ]
      }
    ]
  }
]);

export default router;