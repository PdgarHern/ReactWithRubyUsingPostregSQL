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
import { useAnimeFetch } from "../hooks/useAnimeFetch";
// Styles
import { Wrapper } from "./UpdateImgs.styles";
// Image
import PosterExample from "../images/PosterExample.png";
import ThumbExample from "../images/ThumbExample.png";
// Context
import { Context } from "../context";

const UpdateAnimeImgs = () => {
  const { animeId } = useParams();
  const { state: anime } = useAnimeFetch(animeId);

  const [poster, setPoster] = useState();
  const [thumb, setThumb] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      if (poster != null) formData.append('poster', poster);
      if (thumb != null) formData.append('thumb', thumb);

      await API.updateAnime(animeId, formData);

      setLoading(false);

      navigate(`/anime/${animeId}`);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        window.location.reload(false)}, 2000);
    }
    
  }

  const handleInput = (e) => {
    const name = e.currentTarget.name;

    if (name === 'poster_image') setPoster(e.currentTarget.files[0]);
    if (name === 'thumb_image') setThumb(e.currentTarget.files[0]);

  }

  return (
    <>
      <BreadCrumb animeTitle={anime.title} linkPath={`/anime/${animeId}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {!loading && (
          <>
            <label>Poster</label>
            <input
              id="image"
              type='file'
              name='poster_image'
              onChange={handleInput}
            />
            <img id="posterImg" src={PosterExample} alt="Not Found" />
            <label>Thumb</label>
            <input
              id="image"
              type='file'
              name='thumb_image'
              onChange={handleInput}
            />
            <img id="thumbImg" src={ThumbExample} alt="Not Found" />
            <ButtonDark text='Update' callback={handleSubmit} />
          </>
        )}
        {loading && !error && (
          <>
            <Spinner />
            <div>Processing your request...</div>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default UpdateAnimeImgs;
