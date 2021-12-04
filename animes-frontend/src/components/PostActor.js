import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import BreadCrumb from "./BreadCrumb";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";
// Styles
import { Wrapper, Content } from "./Post.styles";
// Image
import ImgExample from "../images/ImgExample.png";

const PostActor = () => {
  const { animeId } = useParams();

  const {state: anime, error} = useAnimeFetch(animeId);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [character, setCharacter] = useState('');
  const [img, setImg] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('gender', gender);
    formData.append('age', age);
    formData.append('character_done', character);
    formData.append('anime_id', animeId);
    formData.append('img', img);

    await API.postActor(formData);

    setLoading(false);

    navigate(`/anime/${animeId}`);

  }

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'name') setName(value);
    if (name === 'gender') setGender(value);
    if (name === 'age') setAge(value);
    if (name === 'character') setCharacter(value);
    if (name === 'img') setImg(e.currentTarget.files[0]);

  }

  return (
    <>
      <BreadCrumb animeTitle={anime.title} linkPath={`/anime/${animeId}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        <Content>
          {!loading && (
            <>
              <div className="column">
                <label>Name</label>
                <input
                  type='text'
                  value={name}
                  name='name'
                  onChange={handleInput}
                />
                <label>Gender</label>
                <input
                  type='text'
                  value={gender}
                  name='gender'
                  onChange={handleInput}
                />
                <label>Age</label>
                <input
                  type='text'
                  value={age}
                  name='age'
                  onChange={handleInput}
                />
                <label>Character</label>
                <input
                  type='text'
                  value={character}
                  name='character'
                  onChange={handleInput}
                />
              </div>
              <div className="column">
                <label>Image</label>
                <input
                  id="image"
                  type='file'
                  name='img'
                  onChange={handleInput}
                />
                <img id="img" src={ImgExample} alt='Not-Found' />
              </div>
            </>
          )}
        </Content>
        {!loading && (
          <ButtonDark text='Add' callback={handleSubmit} />
        )}
        {loading && (
          <>
            <Spinner />
            <div>Processing your request...</div>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default PostActor;
