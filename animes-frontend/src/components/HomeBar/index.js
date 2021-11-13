import React from "react";
import { Link } from "react-router-dom";
// Components
import Button from "../Button";
// Styles
import { Wrapper, Content } from "./HomeBar.styles";

const HomeBar = () => (
  <Wrapper>
    <Content>
      <div className="column">
        <Link to={`/about-us`}>
          <Button text="About Us" />
        </Link>
      </div>
      <div className="column">
        <Link to={`/browse-info`}>
          <Button text="Browse Info" />
        </Link>
      </div>
    </Content>
  </Wrapper>
);

export default HomeBar;
