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
import { Wrapper, Content, Text } from "./CharacterInfo.styles";
// Context
import { Context } from "../../context";

const CharacterInfo = ({ character, poster }) => (
  <Wrapper backdrop={
            poster == null
              ? NoPoster
              : poster.url
          }>
    <Content>
      <Thumb
        image={
          character.img == null
            ? NoImage
            : character.img.url
        }
        clickable={false}
      />
      <Text>
        <h1>{character.name}</h1>
        <h3>GENDER</h3>
        <p>{character.gender}</p>

        <div className="info">
          <div>
            <h3>AGE</h3>
            <div className="age">{character.age}</div>
          </div>
          <div className="role">
            <h3>Role</h3>
            <p>{character.role}</p>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
)

export default CharacterInfo;
