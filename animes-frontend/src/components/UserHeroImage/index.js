import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Button from "../Button";
// Styles
import { Wrapper, Content, Text, Image } from "./UserHeroImage.styles";

const UserHeroImage = ({ userId, banner, pic, name }) => {
  const navigate = useNavigate();

  const handleEditButton = () => {
    navigate(`/update-user-info/${userId}`);
  }

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
          <Button text='Edit Profile' callback={handleEditButton} />
        </div>
      </Content>
    </Wrapper>
  )
}

export default UserHeroImage;
