import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./UserBar.styles";

const HomeBar = () => {
  const navigate = useNavigate();

  const handleFirstButton = () => {
    navigate(`/favourite-animes/${localStorage.userId}`);
  }
  
  const handleSecondButton = () => {
    navigate(`/favourite-characters/${localStorage.userId}`);
  }
  
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <Button text="Favourite Animes" callback={handleFirstButton} />
        </div>
        <div className="column">
          <Button text="Favourite Characters" callback={handleSecondButton} />
        </div>
      </Content>
    </Wrapper>
  )
};

export default HomeBar;
