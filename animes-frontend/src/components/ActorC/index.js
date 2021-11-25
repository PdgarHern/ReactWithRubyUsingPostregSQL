import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
// Styles
import { Wrapper, Image } from "./Actor.styles";

const ActorC = ({ actorId, name, character, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/actor/${actorId}`);
  }

  return(
    <Wrapper>
      <Image src={imageUrl} alt='actor-thumb' onClick={handleClick} />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
  
};

ActorC.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default ActorC;
