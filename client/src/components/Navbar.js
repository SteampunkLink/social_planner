import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/auth/authSlice";

const PublicNav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login In</Link></li>
      </ul>
    </div>
  )
};

const PrivateNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/landing">Private</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  )
};

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {!user ? <PublicNav /> : <PrivateNav />}
    </div>
  )
}

export default Navbar