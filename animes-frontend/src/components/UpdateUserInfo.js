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
import { Wrapper, Content } from "./Post.styles";
// Image
import PosterExample from "../images/PosterExample.png";

const UpdateUserInfo = () => {
  const { userId } = useParams();
  const { state: info } = useUserInfoFetch(userId);

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [favDemographic, setFavDemographic] = useState('');
  const [isAdmin, setIsAdmin] = useState();
  const [profileImg, setProfileImg] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleValue = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const placeholder = e.currentTarget.placeholder;

    if (name === 'user_name' && value === '') setUserName(placeholder);
    if (name === 'name' && value === '') setName(placeholder);
    if (name === 'surname' && value === '') setSurname(placeholder);
    if (name === 'age' && value === '') setAge(placeholder);
    if (name === 'fav_demograph' && value === '') setFavDemographic(placeholder);

  }

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'user_name') setUserName(value);
    if (name === 'name') setName(value);
    if (name === 'surname') setSurname(value);
    if (name === 'age') setAge(value);
    if (name === 'fav_demograph') setFavDemographic(value);
    if (name === 'profile_img') setProfileImg(e.currentTarget.files[0]);

  }

  const handleSubmit = async () => {
    try {
      setError(false);
      setLoading(true);

      if (profileImg == null) {
        const formNoImg = new FormData();

        if (userName != '') { formNoImg.append('user_name', userName) }
        if (name != '') { formNoImg.append('name', name) }
        if (surname != '') { formNoImg.append('surname', surname) }
        if (age != '') { formNoImg.append('age', age) }
        if (favDemographic != '') { formNoImg.append('fav_demograph', favDemographic) }

        await API.updateInfo(info[0].id, formNoImg);

      } else {
        const formImg = new FormData();

        if (userName != '') { formImg.append('user_name', userName) }
        if (name != '') { formImg.append('name', name) }
        if (surname != '') { formImg.append('surname', surname) }
        if (age != '') { formImg.append('age', age) }
        if (favDemographic != '') { formImg.append('fav_demograph', favDemographic) }
        formImg.append('profile_img', profileImg);

        await API.updateInfo(info[0].id, formImg);

      }

      setLoading(false);

      navigate(`/user-page/${userId}`);

    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      {info[0] != null ? (
        <BreadCrumb animeTitle={info[0].user_name} linkPath={`/user-page/${userId}`} />
      ) : null}
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        <Content>
          {!loading && info[0] ? (
            <>
              <div className="column">
                <label>User Name</label>
                <input
                  type='text'
                  placeholder={info[0].user_name}
                  value={userName}
                  name='user_name'
                  onClick={handleValue}
                  onChange={handleInput}
                />
                <label>Name</label>
                <input
                  type='text'
                  placeholder={info[0].name}
                  value={name}
                  name='name'
                  onClick={handleValue}
                  onChange={handleInput}
                />
                <label>Surname</label>
                <input
                  type='text'
                  placeholder={info[0].surname}
                  value={surname}
                  name='surname'
                  onClick={handleValue}
                  onChange={handleInput}
                />
                <label>Age</label>
                <input
                  type='number'
                  placeholder={info[0].age}
                  value={age}
                  name='age'
                  onClick={handleValue}
                  onChange={handleInput}
                />
                <label>Favourite Demographic</label>
                <input
                  type='text'
                  placeholder={info[0].fav_demograph}
                  value={favDemographic}
                  name='fav_demograph'
                  onClick={handleValue}
                  onChange={handleInput}
                />
              </div>
              <div className="column">
                <label>Profile Banner</label>
                <input
                  id="image"
                  type='file'
                  name='profile_img'
                  onChange={handleInput}
                />
                <img id="posterImg" src={PosterExample} alt="Not Found" />
              </div>
            </>
          ) : (
            <>
              <Spinner />
              <div>Processing your request...</div>
            </>
          )}
        </Content>
        {!loading && (
          <ButtonDark text='Update' callback={handleSubmit} />
        )}
      </Wrapper>
    </>
  )
}

export default UpdateUserInfo;
