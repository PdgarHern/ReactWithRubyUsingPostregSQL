import React from "react";
import PropTypes from 'prop-types';
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text }) => (
  <Wrapper type="button">
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string
}

export default Button;
