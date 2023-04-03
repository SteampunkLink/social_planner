import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./views/ErrorPage"; 

import Main from "./views/Main"; 
import Login from "./views/Login";

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
            element: <Login />,
          },
        ]
      }
    ]
  }
]);

export default router;