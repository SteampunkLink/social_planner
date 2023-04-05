import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "../components/TextField";
import { register } from "../redux/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    dispatch(register(newUser));
  }
  return (
    <div>
      <h1>Register</h1>
      <h2><Link to="/login">Login instead</Link></h2>
      <form method="post" onSubmit={registerUser}>
        <TextField name="name" aria="Name" placeholder="Name" />
        <TextField name="email" aria="Email" placeholder="Email" />
        <TextField type="password" name="password" aria="Password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Register
