import React from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../../API";
// Component
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./CharacterBar.styles";

const CharacterBar = ({ character, animeId }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-character/${character.id}`);
  }

  const handleDelete = async () => {
    await API.deleteCharacter(character.id);
    navigate(`/characters/${animeId}`);
  }

  const handleBrowseAnimes = () => {
    navigate('/browse-info');
  }

  return (
    <Wrapper>
      <Content>
      <div className="column">
          <Button text='Update' callback={handleUpdate} />
        </div>
        <div className="column">
          <Button text='Delete' callback={handleDelete} />
        </div>
        <div className="column">
          <Button text='Browse Animes' callback={handleBrowseAnimes} />
        </div>
      </Content>
    </Wrapper>
  )
}

export default CharacterBar;
