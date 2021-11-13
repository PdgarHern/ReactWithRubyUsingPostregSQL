import React, { useContext } from "react";
import API from "../../API";
import PropTypes from "prop-types";
// Components
import Thumb from "../Thumb";
// Config
import { POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./AnimeInfo.styles";
// Context
import { Context } from "../../context";

const AnimeInfo = ({ anime }) => {
  return (
    <Wrapper backdrop={anime.poster}>
      <Content>
        <Thumb
          image={anime.thumb}
          clickable={false}
        />
        <Text>
          <h1>{anime.title}</h1>
          <h3>PLOT</h3>
          <p>{anime.plot}</p>

          <div className="info">
            <div>
              <h3>AUTHOR</h3>
              <div className="author">{anime.author}</div>
            </div>
            <div className="studio">
              <h3>STUDIO</h3>
              <p>{anime.studio}</p>
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
