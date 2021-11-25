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
import { useActorFetch } from "../hooks/useActorFetch";
// Styles
import { Wrapper } from "./Update.styles";
// Context
import { Context } from "../context";

const UpdateActor = () => {
  const { actorId } = useParams();
  const { state: actor, error } = useActorFetch(actorId);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [character, setCharacter] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpdateImg = () => {
    navigate(`/`);
  }

  const handleValue = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const placeholder = e.currentTarget.placeholder;

    if (name === 'name' && value === '') setName(placeholder);
    if (name === 'gender' && value === '') setGender(placeholder);
    if (name === 'age' && value === '') setAge(placeholder);
    if (name === 'character' && value === '') setCharacter(placeholder);
  }

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'name') setName(value);
    if (name === 'gender') setGender(value);
    if (name === 'age') setAge(value);
    if (name === 'character') setCharacter(value);

  }

  const handleSubmit = async () => {
    setLoading(true);
    let aName = '';
    let aGender = '';
    let aAge = '';
    let aCharacter = '';

    if (name === '') { aName = actor.name; }
    else { aName = name; }
    if (gender === '') { aGender = actor.gender; }
    else { aGender = gender; }
    if (age === '') { aAge = actor.age; }
    else { aAge = age; }
    if (character === '') { aCharacter = actor.character_done; }
    else { aCharacter = character; }

    const body = { name: aName, gender: aGender, age: aAge, character_done: aCharacter };

    await API.updateActor(actorId, body);

    setLoading(false);

    navigate(`/actor/${actorId}`);
  }

  return (
    <>
      <BreadCrumb animeTitle={actor.name} linkPath={`/actor/${actor.id}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {!loading && (
          <>
            <label>Name</label>
            <input
              type='text'
              placeholder={actor.name}
              value={name}
              name='name'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Gender</label>
            <input
              type='text'
              placeholder={actor.gender}
              value={gender}
              name='gender'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Age</label>
            <input
              type='number'
              placeholder={actor.age}
              value={parseInt(age)}
              name='age'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Character</label>
            <input
              type='text'
              placeholder={actor.character_done}
              value={character}
              name='character'
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

export default UpdateActor;
