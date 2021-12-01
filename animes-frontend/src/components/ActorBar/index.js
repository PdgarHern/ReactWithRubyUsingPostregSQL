import React from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../../API";
// Component
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./ActorBar.styles";

const ActorBar = ({ actor, animeId }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-actor/${actor.id}`);
  }

  const handleDelete = async () => {
    await API.deleteActor(actor.id);
    navigate(`/${animeId}`);
  }

  const handleBrowseAnimes = () => {
    navigate('/browse-info');
  }

  return (
    <Wrapper>
      <Content>
        {localStorage.userToken && (
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
  )
}

export default ActorBar;
