import React from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../../API";
// Component
import Button from "../Button";
// Hook
import { useUserInfoFetch } from "../../hooks/useUserInfoFetch";
// Styles
import { Wrapper, Content } from "./CharacterBar.styles";

const CharacterBar = ({ character, animeId }) => {
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const navigate = useNavigate();

  let admin = false;

  const handleUpdate = () => {
    navigate(`/update-character/${character.id}`);
  }

  const handleDelete = async () => {
    try {
      await API.deleteCharacter(character.id);

      sessionStorage.removeItem(`character${character.id}`);
      sessionStorage.removeItem(`anime${animeId}`);

      navigate(`/characters/${animeId}`);
    } catch (error) {
      navigate(`/characters/${animeId}`);
    }
    
  }

  const handleBrowseAnimes = () => {
    navigate('/browse-info');
  }

  const handleAdmin = () => {
    if (info[0].is_admin) {
      admin = true;
    }
  }

  return (
    <>
    {info[0] && (
      handleAdmin()
    )}
    <Wrapper>
      <Content>
        {localStorage.userToken && admin && (
          <>
            <div className="column">
              <Button text='Update' callback={handleUpdate} />
            </div>
            <div className="column">
              <Button text='Delete' callback={handleDelete} />
            </div>
          </>
        )}
        <div className="column">
          <Button text='Browse Animes' callback={handleBrowseAnimes} />
        </div>
      </Content>
    </Wrapper>
    </>
  )
}

export default CharacterBar;
