import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Button from "../Button";
// Styles
import { Wrapper, Content, Text, Image } from "./UserHeroImage.styles";

const UserHeroImage = ({ banner, pic, name }) => {
  const navigate = useNavigate();

  const handlePic = () => {
    navigate(`/update-user-pic/${localStorage.userId}`);
  }

  return (
    <Wrapper image={banner}>
      <Content>
        <div className="content">
          <Image src={pic} alt='user-pic' onClick={handlePic} />
          <Text>
            <h1>{name}</h1>
          </Text>
        </div>
        <div className="configButton">
          <Button text='Edit Profile' callback={false} />
        </div>
      </Content>
    </Wrapper>
  )
}

export default UserHeroImage;
