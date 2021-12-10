import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// API
import API from "../API";
// Components
import BreadCrumb from "./BreadCrumb";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Hook
import { useCharacterFetch } from "../hooks/useCharacterFetch";
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Styles
import { Wrapper } from "./Update.styles";
// Context
import { Context } from "../context";

const UpdateCharacter = () => {
  const { characterId } = useParams();
  const { state: character, error } = useCharacterFetch(characterId);
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpdateImg = () => {
    navigate(`/update-character-img/${characterId}`);
  }

  const handleValue = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const placeholder = e.currentTarget.placeholder;

    if (name === 'name' && value === '') setName(placeholder);
    if (name === 'gender' && value === '') setGender(placeholder);
    if (name === 'age' && value === '') setAge(placeholder);
    if (name === 'role' && value === '') setRole(placeholder);
  }

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'name') setName(value);
    if (name === 'gender') setGender(value);
    if (name === 'age') setAge(value);
    if (name === 'role') setRole(value);

  }

  const handleSubmit = async () => {
    setLoading(true);
    let aName = '';
    let aGender = '';
    let aAge = '';
    let aRole = '';

    if (name === '') { aName = character.name; }
    else { aName = name; }
    if (gender === '') { aGender = character.gender; }
    else { aGender = gender; }
    if (age === '') { aAge = character.age; }
    else { aAge = age; }
    if (role === '') { aRole = character.role; }
    else { aRole = role; }

    const body = { name: aName, gender: aGender, age: aAge, role: aRole };

    await API.updateCharacter(characterId, body);

    setLoading(false);

    navigate(`/character/info/${characterId}`);
  }

  const handleAuth = () => {
    navigate('/login');
  }

  const handleAdmin = () => {
    if (!info[0].is_admin) {
      navigate(`/user-page/${localStorage.userId}`);
    }
  }

  return (
    <>
      {!localStorage.userId && (
        handleAuth()
      )}
      {info[0] && (
        handleAdmin()
      )}
      <BreadCrumb animeTitle={character.name} linkPath={`/character/info/${characterId}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {!loading && (
          <>
            <label>Name</label>
            <input
              type='text'
              placeholder={character.name}
              value={name}
              name='name'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Gender</label>
            <input
              type='text'
              placeholder={character.gender}
              value={gender}
              name='gender'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Age</label>
            <input
              type='number'
              placeholder={character.age}
              value={parseInt(age)}
              name='age'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Role</label>
            <input
              type='text'
              placeholder={character.role}
              value={role}
              name='role'
              onChange={handleInput}
              onClick={handleValue}
            />
            <div className="buttons">
              <ButtonDark text='Update' callback={handleSubmit} />
              <ButtonDark text='Image' callback={handleUpdateImg} />
            </div>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default UpdateCharacter;
