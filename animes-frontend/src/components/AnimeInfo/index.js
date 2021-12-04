import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// API
import API from "../../API";
// Components
import Thumb from "../Thumb";
import ButtonDark from "../ButtonDark";
// Hook
import { useUserInfoFetch } from "../../hooks/useUserInfoFetch";
import { useFavAnimeFetch } from "../../hooks/useFavAnimeFetch";
// Image
import NoImage from "../../images/NoThumb.png";
import NoPoster from "../../images/NoPoster.png";
// Styles
import { Wrapper, Content, Text } from "./AnimeInfo.styles";
// Context
import { Context } from "../../context";

const AnimeInfo = ({ anime }) => {
  const { state: info } = useUserInfoFetch(localStorage.userId);
  const { state: favAnimes } = useFavAnimeFetch(localStorage.userId);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  let admin = false;
  let fav = false;

  const handleUpdate = () => {
    navigate(`/update-anime/${anime.id}`);
  }

  const handleDelete = async () => {
    await API.deleteAnime(anime.id);
    navigate('/browse-info');
  }

  const handleCharacters = () => {
    navigate(`/characters/${anime.id}`);
  }

  const handleAddFav = async () => {
    try {
      setLoading(true);
      setError(false);

      const formData = new FormData();
      formData.append('user_identificator', localStorage.userId);
      formData.append('anime_identificator', anime.id);

      await API.createFavAnime(formData);

      setLoading(false);

      handleFav();
    } catch (error) {
      setError(true);
    }
  }

  const handleAdmin = () => {
    if (info[0].is_admin) {
      admin = true;
    }
  }

  const handleFav = () => {
    for (const i in favAnimes) {
      if (anime.id === i.anime_identificator) {
        fav = true;
        break;
      }
    }
  }

  return (
    <>
    {info[0] && (
      handleAdmin()
    )}
    {favAnimes && (
      handleFav()
    )}
    <Wrapper backdrop={
              anime.poster == "" || anime.poster == null
                ? NoPoster
                : anime.poster.url
            }>
      <Content>
        <Thumb
          image={
            anime.thumb == "" || anime.thumb == null
             ? NoImage
             : anime.thumb.url
          }
          clickable={false}
        />
        <Text>
          <h1>{anime.title}</h1>
          <h3>PLOT</h3>
          <p>{anime.plot}</p>
          <h3>GENRES</h3>
          <p>{anime.genres}</p>

          <div className="info">
            <div>
              <h3>AUTHOR</h3>
              <div className="author">{anime.author}</div>
              {localStorage.userToken && admin && (
                <ButtonDark text="Update" callback={handleUpdate} />
              )}
              <ButtonDark text="Characters" callback={handleCharacters} />
            </div>
            <div className="studio">
              <h3>STUDIO</h3>
              <p>{anime.studio}</p>
              {localStorage.userToken && admin && (
                <ButtonDark text="Delete" callback={handleDelete} />
              )}
              {localStorage.userToken && fav == false && (
                <ButtonDark text="Add Fav" callback={handleAddFav} />
              )}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
    </>
  )
}

AnimeInfo.propTypes = {
  anime: PropTypes.object
}

export default AnimeInfo;
