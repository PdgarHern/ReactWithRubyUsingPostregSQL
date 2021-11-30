import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import ButtonDark from "./ButtonDark";
// Styles
import { Wrapper } from "./UserForms.styles";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const body = {authenticity_token: process.env.REACT_APP_AUTHENTICITY_TOKEN, user: {email: email, password: password, password_confirmation: passConfirmation}, commit: "Sign Up"};
      
      // await API.createUser(body);

      setLoading(false);
      
      console.log("Todo bien");

      navigate('/user_page');
    } catch (error) {
      setError(true);
    }
    
  }

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passConfirmation') setPassConfirmation(value);

  }

  if (error == true) return <div className="error">Something went wrong...</div>

  return (
    <>
      <Wrapper>
        <label>Email</label>
        <input
          type='text'
          value={email}
          name='email'
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          name='password'
          onChange={handleInput}
        />
        <label>Password Confirmation</label>
        <input
          type='password'
          value={passConfirmation}
          name='passConfirmation'
          onChange={handleInput}
        />
      </Wrapper>
      <ButtonDark text='Register' callback={handleSubmit} />
    </>
  )
}

export default Register;
