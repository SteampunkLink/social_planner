import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const testString = useLoaderData();
  return (
    <div className="desktop">
      <Navbar />
      <Outlet />
      <p>{testString}</p>
    </div>
  )
};

export default App;

