import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Styles
import { Wrapper } from "./UserForms.styles";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);

  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append('user[email]', email);
      formData.append('user[password]', password);

      await API.login(formData);
      
      setLoading(false);

      navigate(`/user-page/${localStorage.userId}`);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false); 
        setLoading(false); 
        setEmail('');
        setPassword('');
        navigate('/login');}, 2000);
      
    }
  }

  const handleRegister = () => {
    navigate('/register');
  }

  // if (error == true) return <div className="error">Something went wrong...</div>

  return (
    <>
      
        <Wrapper>
          {error && <div className="error">Something went wrong...</div>}
          {!loading && !error && (
            <>
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
            <ButtonDark id="login" text='Login' callback={handleSubmit} />
            <p/>
            <h1>You don't have an account?</h1>
            <ButtonDark text='Register' callback={handleRegister} />
            </>
          )}
        </Wrapper>
      {loading && !error &&
          <div className="spinner">
            <Spinner />
          </div>
      }
    </>
  )
}

export default Login;
