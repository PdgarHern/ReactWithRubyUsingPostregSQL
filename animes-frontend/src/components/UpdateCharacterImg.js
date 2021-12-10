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
import { Wrapper } from "./UpdateImgs.styles";
// Image
import ImgExample from "../images/ImgExample.png";
// Context
import { Context } from "../context";

const UpdateCharacterImg = () => {
  const { characterId } = useParams();
  const { state: character } = useCharacterFetch(characterId);
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const [img, setImg] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      if (img != null) formData.append('img', img);

      await API.updateCharacter(characterId, formData);

      setLoading(false);

      navigate(`/character/info/${characterId}`);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        window.location.reload(false)}, 2000);
    }
    
  }

  const handleInput = (e) => {
    const name = e.currentTarget.name;

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
      <BreadCrumb animeTitle={character.name} linkPath={`/character/info/${characterId}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {!loading && !error && (
          <>
            <label>Image</label>
            <input
              id="image"
              type='file'
              name='img'
              onChange={handleInput}
            />
            <img id="img" src={ImgExample} alt="Not Found" />
            <ButtonDark text='Update' callback={handleSubmit} />
          </>
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

export default UpdateCharacterImg;
