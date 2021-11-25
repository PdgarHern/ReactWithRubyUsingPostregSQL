import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// API
import API from "../../API";
// Components
import Thumb from "../Thumb";
import ButtonDark from "../ButtonDark";
// Image
import NoImage from "../../images/NoThumb.png";
import NoPoster from "../../images/NoPoster.png";
// Styles
import { Wrapper, Content, Text } from "./AnimeInfo.styles";
// Context
import { Context } from "../../context";

const AnimeInfo = ({ anime }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-anime/${anime.id}`);
  }

  const handleDelete = async () => {
    await API.deleteAnime(anime.id);
    navigate('/browse-info');
  }

  return (
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
              <ButtonDark text="Update" callback={handleUpdate} />
              <ButtonDark text="Characters" callback={false} />
            </div>
            <div className="studio">
              <h3>STUDIO</h3>
              <p>{anime.studio}</p>
              <ButtonDark text="Delete" callback={handleDelete} />
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  )
}

AnimeInfo.propTypes = {
  anime: PropTypes.object
}

export default AnimeInfo;
