import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = ({ Component }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user])
  
  return (
    <div>
      <Component user={user} />
      This is private. You shouldn't be seeing this if you aren't logged in.
    </div>
  )
}

export default Private
