import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
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
      const formData = new FormData();
      const infoData = new FormData();

      formData.append('user[email]', email);
      formData.append('user[password]', password);
      
      await API.createUser(formData);
      await API.login(formData);

      infoData.append('user_id', localStorage.userId);
      infoData.append('profile_pic', Image);
      infoData.append('profile_img', Image);

      await API.createInfo(infoData);

      setLoading(false);
      
      console.log("Todo bien");

      navigate(`/user-page/${localStorage.userId}`);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false); 
        setLoading(false); 
        setEmail('');
        setPassword('');
        setPassConfirmation('');
        navigate('/login');}, 2000);
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
      {!loading && (
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
      )}
      {loading && (
        <>
          <Spinner />
          <div>Processing your request...</div>
        </>
      )}
    </>
  )
}

export default Register;
