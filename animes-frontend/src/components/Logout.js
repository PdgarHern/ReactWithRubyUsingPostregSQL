import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const goHome = () => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <>
      {goHome()}
      <div className="logout">Successfuly logged out</div>
    </>
  )
}

export default Logout;