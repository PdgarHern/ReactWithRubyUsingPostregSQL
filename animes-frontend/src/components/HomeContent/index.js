import React from "react";
// Styles
import { Wrapper, Content } from "./HomeContent.styles";

const HomeContent = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default HomeContent;
