import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "../components/TextField";
import { register } from "../redux/auth/authSlice";
import Button from '../components/Button';

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
      <h1>Register  <small><Link className="link" to="/login">Login instead</Link></small></h1>
      <form method="post" onSubmit={registerUser}>
        <TextField name="name" aria="Name" placeholder="Name" />
        <TextField name="email" aria="Email" placeholder="Email" />
        <TextField type="password" name="password" aria="Password" placeholder="Password" />
        <Button isSubmit={true} text="Register" />
      </form>
    </div>
  )
}

export default Register
