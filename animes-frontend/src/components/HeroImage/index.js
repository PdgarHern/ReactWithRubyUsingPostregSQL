import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ clickable, image, title, text, animeId }) => (
  <Wrapper image={image}>
    {clickable ? (
      <Link to={`/anime/${animeId}`}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <p>{text}</p>
          </Text>
        </Content>
      </Link>
    ) : (
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    )}

  </Wrapper>
);

HeroImage.propTypes = {
  title: PropTypes.string
}

export default HeroImage;
