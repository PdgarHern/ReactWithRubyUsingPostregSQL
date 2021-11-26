import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import ButtonDark from "./ButtonDark";

const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <ButtonDark text='Register' callback={handleRegister} />
  )
}

export default Login;
