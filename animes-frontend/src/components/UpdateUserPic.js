import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// API
import API from "../API";
// Components
import BreadCrumb from "./BreadCrumb";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Styles
import { Wrapper } from "./UpdateImgs.styles";
// Image
import ImgExample from "../images/ImgExample.png";

const UpdateUserPic = () => {
  const { userId } = useParams();
  const { state: info } = useUserInfoFetch(userId);

  const [pic, setPic] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      if (pic != null) formData.append('profile_pic', pic);

      await API.updateInfo(info[0].id, formData);

      setLoading(false);

      navigate(`/user-page/${userId}`);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        window.location.reload(false)}, 2000);
    }
    
  }

  const handleInput = (e) => {
    setPic(e.currentTarget.files[0]);
  }

  const handleAuth = () => {
    navigate('/login');
  }

  return (
    <>
      {!localStorage.userId && (
        handleAuth()
      )}
      {info[0] ? (
        <BreadCrumb animeTitle={info[0].user_name} linkPath={`/user-page/${userId}`} />
      ) : null}
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {/* {error && <div className="error">There was an error...</div>} */}
        {!loading && !error && (
          <>
            <label>User Picture</label>
            <input
              id="image"
              type='file'
              name='pic'
              onChange={handleInput}
            />
            <img id="profilePic" src={ImgExample} alt="Not Found" />
            <ButtonDark text='Update' callback={handleSubmit} />
          </>
        )}
        {loading && !error && (
          <Spinner />
        )}
      </Wrapper>
    </>
  )
}

export default UpdateUserPic;
