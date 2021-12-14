import React from "react";
// Component
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./AnimeBar.styles";

const AnimeBar = ({ anime }) => (
  <Wrapper>
    <Content>
      {anime.premiered && 
        <div className="column">
          <Button text={'Premiered: ' + anime.premiered} clickable={false} />
        </div>
      }
      {anime.demographic && 
        <div className="column">
        <Button text={'Demographic: ' + anime.demographic} clickable={false} />
        </div>
      }
      {anime.episodes && 
        <div className="column">
        <Button text={'Episodes: ' + anime.episodes} clickable={false} />
        </div>
      }
    </Content>
  </Wrapper>
)



export default AnimeBar;
