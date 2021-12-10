import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import UserHeroImage from "./UserHeroImage";
import UserBar from "./UserBar";
import ButtonDark from "./ButtonDark";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Styles
import { Content } from "./Post.styles";
// Images
import UserPic from "../images/userpic.png";
import UserBanner from "../images/userbanner.png";

const UserPage = () => {
  const { userId } = useParams();
  const { state: userInfo, error } = useUserInfoFetch(userId);

  const navigate = useNavigate();

  const handleAnimeSearcher = () => {
    navigate('/browse-info');
  }

  const handleAuth = () => {
    navigate('/login');
  }

  if (error) return <div className="error">Something went wrong...</div>;

  return (
    <>
      {!localStorage.userId && (
        handleAuth()
      )}
      {userInfo[0] != null ? (
        <>
          <UserHeroImage
            userId={userId}
            banner={userInfo[0].profile_img == null
              ? UserBanner
              : userInfo[0].profile_img.url}
            pic={userInfo[0].profile_pic == null
              ? UserPic
              : userInfo[0].profile_pic.url}
            name={userInfo[0].user_name}
          />
          <UserBar />
          <ButtonDark text="Go to Anime Searcher" callback={handleAnimeSearcher} />
          <Content>
            <div className="infoColumn">
              <strong>Name: {userInfo[0].name}</strong>
              <p/>
              <strong>Surname: {userInfo[0].surname}</strong>
            </div>
            <div className="infoColumn">
              <strong>Age: {userInfo[0].age}</strong>
              <p/>
              <strong>Favourite Demographic: {userInfo[0].fav_demograph}</strong>
            </div>
          </Content>
        </>
      ) : null}
    </>
  )
}

export default UserPage;
