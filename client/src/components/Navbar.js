import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/auth/authSlice";
import Button from "./Button";

const PublicNav = () => {
  return (
    <div className="inner-nav">
      <h2>Social Planner</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
};

const PrivateNav = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }
  return (
    <div className="inner-nav">
      <h2>Hello, {user.name}</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/landing">Private</Link></li>
        <li><Button handleClick={handleLogout} text="Logout" /></li>
      </ul>
    </div>
  )
};

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="navbar">
      {!user ? <PublicNav /> : <PrivateNav user={user} />}
    </div>
  )
}

export default Navbar