import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import ButtonDark from "./ButtonDark";
// Styles
import { Wrapper } from "./UserForms.styles";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // setLoading(true);
    // const body = {authenticity_token: }
  }

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passConfirmation') setPassConfirmation(value);

  }

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
          type='text'
          value={password}
          name='password'
          onChange={handleInput}
        />
        <label>Password Confirmation</label>
        <input
          type='text'
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
