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

const PostCharacter = () => {
  const { animeId } = useParams();

  const { state: anime } = useAnimeFetch(animeId);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('gender', gender);
      formData.append('age', age);
      formData.append('role', role);
      formData.append('anime_id', animeId);
      if (img != null) formData.append('img', img);

      await API.postCharacter(formData);

      setLoading(false);

      navigate(`/characters/${animeId}`);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        window.location.reload(false)}, 2000);
    }

  }

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'name') setName(value);
    if (name === 'gender') setGender(value);
    if (name === 'age') setAge(value);
    if (name === 'role') setRole(value);
    if (name === 'img') setImg(e.currentTarget.files[0]);

  }

  return (
    <>
      <BreadCrumb animeTitle={anime.title} linkPath={`/anime/${animeId}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        <Content>
          {!loading && !error && (
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
                <label>Role</label>
                <input
                  type='text'
                  value={role}
                  name='role'
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
        {!loading && !error && (
          <ButtonDark text='Add' callback={handleSubmit} />
        )}
        {loading && !error && (
          <>
            <Spinner />
            <div>Processing your request...</div>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default PostCharacter;
