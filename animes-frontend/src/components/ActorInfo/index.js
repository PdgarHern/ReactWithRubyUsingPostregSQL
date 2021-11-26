import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// API
import API from "../../API";
// Components
import Thumb from "../Thumb";
import ButtonDark from "../ButtonDark";
// Image
import NoImage from "../../images/NoThumb.png";
import NoPoster from "../../images/NoPoster.png";
// Styles
import { Wrapper, Content, Text } from "./ActorInfo.styles";
// Context
import { Context } from "../../context";

const ActorInfo = ({ actor, poster }) => (
    <Wrapper backdrop={
              poster == null
                ? NoPoster
                : poster.url
            }>
      <Content>
        <Thumb
          image={
            actor.img == null
              ? NoImage
              : actor.img.url
          }
          clickable={false}
        />
        <Text>
          <h1>{actor.name}</h1>
          <h3>GENDER</h3>
          <p>{actor.gender}</p>

          <div className="info">
            <div>
              <h3>AGE</h3>
              <div className="age">{actor.age}</div>
            </div>
            <div className="character">
              <h3>CHARACTER</h3>
              <p>{actor.character_done}</p>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
    
)


export default ActorInfo;
