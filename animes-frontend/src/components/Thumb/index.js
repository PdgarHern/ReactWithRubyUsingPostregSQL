import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, animeId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/anime/${animeId}`}>
        <Image src={image} alt='anime-thumb' />
      </Link>
    ) : (
      <Image src={image} alt='anime-thumb' />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  animeId: PropTypes.number,
  clickable: PropTypes.bool
}

export default Thumb;
