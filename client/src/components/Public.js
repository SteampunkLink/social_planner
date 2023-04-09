import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Public = ({ Component }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!user) {
      navigate("/landing");
    }
  }, [user])
  
  return (
    <div>
      <Component />
    </div>
  )
}

export default Public;