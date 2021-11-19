import React from "react";
// Component
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./AnimeBar.styles";

const AnimeBar = ({ anime }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <Button text={'Premiered: ' + anime.premiered} clickable={false} />
      </div>
      <div className="column">
      <Button text={'Demographic: ' + anime.demographic} clickable={false} />
      </div>
      <div className="column">
      <Button text={'Episodes: ' + anime.episodes} clickable={false} />
      </div>
    </Content>
  </Wrapper>
)



export default AnimeBar;
