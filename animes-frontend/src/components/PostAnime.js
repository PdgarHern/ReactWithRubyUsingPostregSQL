import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import ThumbExample from "../images/ThumbExample.png";
// Context
import { Context } from "../context";

const PostAnime = () => {
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const [title, setTitle] = useState('');
  const [plot, setPlot] = useState('');
  const [genres, setGenres] = useState('');
  const [author, setAuthor] = useState('');
  const [studio, setStudio] = useState('');
  const [premiered, setPremiered] = useState('');
  const [demographic, setDemographic] = useState('');
  const [episodes, setEpisodes] = useState('');
  const [poster, setPoster] = useState();
  const [thumb, setThumb] = useState();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorTitle, setErrorTitle] = useState(false);
  const [errorGenres, setErrorGenres] = useState(false);
  const [errorAuthor, setErrorAuthor] = useState(false);
  const [errorStudio, setErrorStudio] = useState(false);
  const [errorPremiered, setErrorPremiered] = useState(false);
  const [errorDemographic, setErrorDemographic] = useState(false);
  const [errorEpisodes, setErrorEpisodes] = useState(false);
  const [errorPoster, setErrorPoster] = useState(false);
  const [errorThumb, setErrorThumb] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    let errors = 0;

    try {
      if (title == '') {
        setErrorTitle(true);
        errors += 1;
      }
      if (genres == '') {
        setErrorGenres(true);
        errors += 1;
      }
      if (author == '') {
        setErrorAuthor(true);
        errors += 1;
      }
      if (studio == '') {
        setErrorStudio(true);
        errors += 1;
      }
      if (premiered == '' || premiered < 1910 || premiered > 2100) {
        setErrorPremiered(true);
        errors += 1;
      }
      if (demographic == '') {
        setErrorDemographic(true);
        errors += 1;
      }
      if (episodes == '' || episodes <= 0) {
        setErrorEpisodes(true);
        errors += 1;
      }
      if (poster == null) {
        setErrorPoster(true);
        errors += 1;
      }
      if (thumb == null) {
        setErrorThumb(true);
        errors += 1;
      }

      if (errors === 0) {
        setLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('plot', plot);
        formData.append('genres', genres);
        formData.append('author', author);
        formData.append('studio', studio);
        formData.append('premiered', premiered);
        formData.append('demographic', demographic);
        formData.append('episodes', episodes);
        if (poster != null) formData.append('poster', poster);
        if (thumb != null) formData.append('thumb', thumb);
  
  
        await API.postAnime(formData);
  
        setLoading(false);
        sessionStorage.removeItem('browseInfoState');
  
        navigate(`/browse-info`);
      } else {
        setTimeout(() => {
          setErrorTitle(false);
          setErrorGenres(false);
          setErrorAuthor(false);
          setErrorStudio(false);
          setErrorPremiered(false);
          setErrorDemographic(false);
          setErrorEpisodes(false);
          setErrorPoster(false);
          setErrorThumb(false);

          errors = 0;
        }, 3000);
      }
      
    } catch (error) {
      setError(true);
      setTimeout(() => {
        window.location.reload(false)}, 2000);
      
    }

  }

  const handleInput = async (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'title') setTitle(value);
    if (name === 'plot') setPlot(value);
    if (name === 'genres') setGenres(value);
    if (name === 'author') setAuthor(value);
    if (name === 'studio') setStudio(value);
    if (name === 'premiered') setPremiered(parseInt(value));
    if (name === 'demographic') setDemographic(value);
    if (name === 'episodes') setEpisodes(parseInt(value));
    if (name === 'poster_image') setPoster(e.currentTarget.files[0]);
    if (name === 'thumb_image') setThumb(e.currentTarget.files[0]);

  }

  const handleAuth = () => {
    navigate('/login');
  }

  const handleAdmin = () => {
    if (!info[0].is_admin) {
      navigate(`/user-page/${localStorage.userId}`);
    }
  }

  return (
    <>
      {!localStorage.userId && (
        handleAuth()
      )}
      {info[0] && (
        handleAdmin()
      )}
      <BreadCrumb animeTitle={'Post Anime'} linkPath={'/browse-info'} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        <Content>
          {!loading && !error && (
            <>
              <div className="column">
                <label>Title</label>
                <input
                  type='text'
                  value={title}
                  name='title'
                  onChange={handleInput}
                />
                {errorTitle && <div className="formError">*Insert a title</div>}
                <label>Plot</label>
                <input
                  type='text'
                  value={plot}
                  name='plot'
                  onChange={handleInput}
                />
                <label>Genres</label>
                <input
                  type='text'
                  value={genres}
                  name='genres'
                  onChange={handleInput}
                />
                {errorGenres && <div className="formError">*Insert genre/s</div>}
                <label>Author</label>
                <input
                  type='text'
                  value={author}
                  name='author'
                  onChange={handleInput}
                />
                {errorAuthor && <div className="formError">*Insert the author/s</div>}
                <label>Studio</label>
                <input
                  type='text'
                  value={studio}
                  name='studio'
                  onChange={handleInput}
                />
                {errorStudio && <div className="formError">*Insert the studio/s</div>}
                <label>Premiered</label>
                <input
                  type='number'
                  value={parseInt(premiered)}
                  name='premiered'
                  onChange={handleInput}
                />
                {errorPremiered && <div className="formError">*Insert a valid year</div>}
                <label>Demographic</label>
                <input
                  type='text'
                  value={demographic}
                  name='demographic'
                  onChange={handleInput}
                />
                {errorDemographic && <div className="formError">*Insert the demographic/s</div>}
                <label>Episodes</label>
                <input
                  type='number'
                  value={parseInt(episodes)}
                  name='episodes'
                  onChange={handleInput}
                />
                {errorEpisodes && <div className="formError">*Insert a valid number</div>}
              </div>
              <div className="column">
                <label>Poster</label>
                <input
                  id="image"
                  type='file'
                  name='poster_image'
                  onChange={handleInput}
                />
                <img id="posterImg" src={PosterExample} alt="Not Found" />
                {errorPoster && <div className="formError">*Insert a poster</div>}
                <br/>
                <label>Thumb</label>
                <input
                  id="image"
                  type='file'
                  name='thumb_image'
                  onChange={handleInput}
                />
                <img id="thumbImg" src={ThumbExample} alt="Not Found" />
                {errorThumb && <div className="formError">*Insert a thumb</div>}
              </div>
            </>
          )}
        </Content>
        {!loading && !error && (
          <ButtonDark text='Add' callback={handleSubmit} />
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

export default PostAnime;
