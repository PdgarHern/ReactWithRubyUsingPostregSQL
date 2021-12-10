import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
// API
import API from "../API";
// Components
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Styles
import { Wrapper } from "./UserForms.styles";
// Images
import UserPic from "../images/userpic.png";
import UserBanner from "../images/userbanner.png";

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notEmail, setNotEmail] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (validator.isEmail(email)) {
        if (password == passConfirmation && password != '') {
          if (userName != '') {
            setLoading(true);
            const formData = new FormData();
            const infoData = new FormData();

            formData.append('user[email]', email);
            formData.append('user[password]', password);

            await API.createUser(formData);
            await API.login(formData);

            infoData.append('user_name', userName);
            infoData.append('user_id', localStorage.userId);
            infoData.append('is_admin', false);

            await API.createInfo(infoData);

            setLoading(false);

            console.log("Todo bien");

            navigate(`/user-page/${localStorage.userId}`);
          } else {
            setNameError(true);
            setTimeout(() => {
              setNameError(false)
            }, 3500);
          }

        } else {
          setPassError(true);
          setTimeout(() => {
            setPassError(false)
          }, 3500);
        }

      } else {
        setNotEmail(true);
        setTimeout(() => {
          setNotEmail(false)
        }, 3500);
      }

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
        setLoading(false);
        setEmail('');
        setPassword('');
        setPassConfirmation('');
        navigate('/register');
      }, 2000);
    }

  }

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'userName') setUserName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'passConfirmation') setPassConfirmation(value);

  }

  return (
    <>
      <Wrapper>
        {error && <div className="error">Something went wrong...</div>}
        {!loading && !error && (
          <>
            <label>User Name</label>
            <input
              type='text'
              value={userName}
              name='userName'
              onChange={handleInput}
            />
            {nameError && <div className="formError">*Please insert a name</div>}
            <label>Email</label>
            <input
              type='text'
              value={email}
              name='email'
              onChange={handleInput}
            />
            {notEmail && <div className="formError">*Invalid email provided</div>}
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
            {passError && <div className="formError">*Password doesn't match</div>}
            <ButtonDark text='Register' callback={handleSubmit} />
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

export default Register;
