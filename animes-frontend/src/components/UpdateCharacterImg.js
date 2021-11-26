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
// Styles
import { Wrapper } from "./UpdateImgs.styles";
// Image
import ImgExample from "../images/ImgExample.png";
// Context
import { Context } from "../context";

const UpdateCharacterImg = () => {
  const { characterId } = useParams();
  const { state: character, error } = useCharacterFetch(characterId);

  const [img, setImg] = useState();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('img', img);

    await API.updateCharacter(characterId, formData);

    setLoading(false);

    navigate(`/character/info/${characterId}`);
  }

  const handleInput = (e) => {
    const name = e.currentTarget.name;

    if (name === 'img') setImg(e.currentTarget.files[0]);

  }

  return (
    <>
      <BreadCrumb animeTitle={character.name} linkPath={`/character/info/${characterId}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {!loading && (
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

export default UpdateCharacterImg;
