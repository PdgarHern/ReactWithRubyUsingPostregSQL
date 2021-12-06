import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// API
import API from "../../API";
// Components
import Thumb from "../Thumb";
import ButtonDark from "../ButtonDark";
// Hook
import { useFavCharacterFetch } from "../../hooks/useFavCharacterFetch";
// Image
import NoImage from "../../images/NoThumb.png";
import NoPoster from "../../images/NoPoster.png";
// Styles
import { Wrapper, Content, Text } from "./CharacterInfo.styles";
// Context
import { Context } from "../../context";

const CharacterInfo = ({ character, poster }) => {
  const { state: favCharacters } = useFavCharacterFetch(localStorage.userId);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let fav = false;
  let favId = null;

  const handleAddFav = async () => {
    try {
      setLoading(true);
      setError(false);

      const formData = new FormData();
      formData.append('user_identificator', localStorage.userId);
      formData.append('character_identificator', character.id);

      await API.createFavCharacter(formData);

      setLoading(false);

      window.location.reload(false);
    } catch (error) {
      setError(true);
    }
  }

  const handleDelFav = async () => {
    try {
      setLoading(true);
      setError(false);

      await API.deleteFavCharacter(favId);

      setLoading(false);

      window.location.reload(false);
    } catch (error) {
      setError(true);
    }
  }

  const handleFav = () => {
    for (const i in favCharacters) {
      if (character.id === favCharacters[i].character_identificator) {
        fav = true;
        favId = favCharacters[i].id;
        break;
      }
    }
  }

  return (
    <>
      {favCharacters && (
        handleFav()
      )}
      <Wrapper backdrop={
        poster == null
          ? NoPoster
          : poster.url
      }>
        <Content>
          <Thumb
            image={
              character.img == null
                ? NoImage
                : character.img.url
            }
            clickable={false}
          />
          <Text>
            <h1>{character.name}</h1>
            <h3>GENDER</h3>
            <p>{character.gender}</p>

            <div className="info">
              <div>
                <h3>AGE</h3>
                <div className="age">{character.age}</div>
                {localStorage.userToken && fav == false && (
                  <ButtonDark text="Add Fav" callback={handleAddFav} />
                )}
                {localStorage.userToken && fav && (
                  <ButtonDark text="Delete Fav" callback={handleDelFav} />
                )}
              </div>
              <div className="role">
                <h3>Role</h3>
                <p>{character.role}</p>
              </div>
            </div>
          </Text>
        </Content>
      </Wrapper>
    </>
  )
}

export default CharacterInfo;
