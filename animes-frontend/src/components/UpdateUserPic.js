import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// API
import API from "../API";
// Components
import BreadCrumb from "./BreadCrumb";
import ButtonDark from "./ButtonDark";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Styles
import { Wrapper } from "./UpdateImgs.styles";
// Image
import ThumbExample from "../images/ThumbExample.png";

const UpdateUserPic = () => {
  const { userId } = useParams();
  const { state: info, error } = useUserInfoFetch(userId);

  const [pic, setPic] = useState();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('profile_pic', pic);

    await API.updateInfo(info[0].id, formData);

    setLoading(false);

    navigate(`/user-page/${userId}`);
  }

  const handleInput = (e) => {
    setPic(e.currentTarget.files[0]);
  }

  return (
    <>
      <BreadCrumb linkPath={`/user-page/${userId}`} />
      <Wrapper>
        {/* {error && <div className="error">There was an error...</div>} */}
        {!loading && (
          <>
            <label>User Picture</label>
            <input
              id="image"
              type='file'
              name='pic'
              onChange={handleInput}
            />
            <img id="thumbImg" src={ThumbExample} alt="Not Found" />
            <ButtonDark text='Update' callback={handleSubmit} />
          </>
        )}
      </Wrapper>
    </>
  )
}

export default UpdateUserPic;
