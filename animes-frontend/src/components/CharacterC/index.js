import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
// Styles
import { Wrapper, Image } from "./CharacterC.styles";

const CharacterC = ({ characterId, name, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/info/${characterId}`);
  }

  return (
    <Wrapper>
      <Image src={imageUrl} alt='character-thumb' onClick={handleClick} />
      <h3>{name}</h3>
    </Wrapper>
  )
}

CharacterC.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default CharacterC;
