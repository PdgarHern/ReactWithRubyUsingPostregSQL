import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import UserHeroImage from "./UserHeroImage";
import UserBar from "./UserBar";
import ButtonDark from "./ButtonDark";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Images
import UserPic from "../images/userpic.png";
import UserBanner from "../images/userbanner.png";

const UserPage = () => {
  const { userId } = useParams();
  const { state: userInfo, error } = useUserInfoFetch(userId);

  const navigate = useNavigate();

  if (error) return <div className="error">Something went wrong...</div>;

  const handleEditButton = () => {
    navigate('/');
  }

  return (
    <>
      {userInfo[0] != null ? (
        <>
          <UserHeroImage
            banner={userInfo[0].profile_img == null
              ? UserBanner
              : userInfo.profile_img.url}
            pic={UserPic}
            name={userInfo[0].user_name}
          />
          <UserBar />
          <ButtonDark text="Go to Anime Searcher" callback={false} />
        </>
      ) : null}

    </>
  )
}

export default UserPage;
