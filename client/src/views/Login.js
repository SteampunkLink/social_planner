import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "../components/TextField";
import { login } from "../redux/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    dispatch(login(newUser));
  }
  return (
    <div>
      <h1>Login</h1>
      <h2><Link to="/register">Register instead</Link></h2>
      <form method="post" onSubmit={loginUser}>
        <TextField name="email" aria="Email" placeholder="Email" />
        <TextField type="password" name="password" aria="Password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
