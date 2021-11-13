import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, BackImage } from "./BreadCrumb.styles";
// Images
import GoBack from "../../images/back.png";

const BreadCrumb = ({ animeTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{animeTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  animeTitle: PropTypes.string
}

export default BreadCrumb;
