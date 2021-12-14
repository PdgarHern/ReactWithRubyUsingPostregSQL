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
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Styles
import { Wrapper, Content } from "./Post.styles";
// Image
import ImgExample from "../images/ImgExample.png";

const PostCharacter = () => {
  const { animeId } = useParams();

  const { state: anime } = useAnimeFetch(animeId);
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [imgError, setImgError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    let errors = 0;

    try {
      if (name == '') {
        setNameError(true);
        errors += 1;
      }
      if (gender == '') {
        setGenderError(true);
        errors += 1;
      }
      if (age == '') {
        setAgeError(true);
        errors += 1;
      }
      if (role == '') {
        setRoleError(true);
        errors += 1;
      }
      if (img == null) {
        setImgError(true);
        errors += 1;
      }

      if (errors === 0) {
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
      } else {
        setTimeout(() => {
          setNameError(false);
          setGenderError(false);
          setAgeError(false);
          setRoleError(false);
          setImgError(false);

          errors = 0;
        }, 3000);
      }
      
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
                {nameError && <div className="formError">*Insert a name</div>}
                <label>Gender</label>
                <input
                  type='text'
                  value={gender}
                  name='gender'
                  onChange={handleInput}
                />
                {genderError && <div className="formError">*Insert a gender</div>}
                <label>Age</label>
                <input
                  type='text'
                  value={age}
                  name='age'
                  onChange={handleInput}
                />
                {ageError && <div className="formError">*Insert the age</div>}
                <label>Role</label>
                <input
                  type='text'
                  value={role}
                  name='role'
                  onChange={handleInput}
                />
                {roleError && <div className="formError">*Insert the role</div>}
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
                {imgError && <div className="formError">*Insert an image</div>}
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
