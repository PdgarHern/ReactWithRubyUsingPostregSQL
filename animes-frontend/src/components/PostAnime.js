import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import BreadCrumb from "./BreadCrumb";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Styles
import { Wrapper, Content } from "./Post.styles";
// Image
import PosterExample from "../images/PosterExample.png";
import ThumbExample from "../images/ThumbExample.png";
// Context
import { Context } from "../context";

const PostAnime = () => {
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

  const navigate = useNavigate();

  const handleSubmit = async () => {
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
    formData.append('poster', poster);
    formData.append('thumb', thumb);


    await API.postAnime(formData);

    setLoading(false);

    navigate(`/browse-info`);

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

  return (
    <>
      <BreadCrumb animeTitle={'Post Anime'} linkPath={'/browse-info'} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        <Content>
          {!loading && (
            <>
              <div className="column">
                <label>Title</label>
                <input
                  type='text'
                  value={title}
                  name='title'
                  onChange={handleInput}
                />
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
                <label>Author</label>
                <input
                  type='text'
                  value={author}
                  name='author'
                  onChange={handleInput}
                />
                <label>Studio</label>
                <input
                  type='text'
                  value={studio}
                  name='studio'
                  onChange={handleInput}
                />
                <label>Premiered</label>
                <input
                  type='number'
                  value={parseInt(premiered)}
                  name='premiered'
                  onChange={handleInput}
                />
                <label>Demographic</label>
                <input
                  type='text'
                  value={demographic}
                  name='demographic'
                  onChange={handleInput}
                />
                <label>Episodes</label>
                <input
                  type='number'
                  value={parseInt(episodes)}
                  name='episodes'
                  onChange={handleInput}
                />
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
                <label>Thumb</label>
                <input
                  id="image"
                  type='file'
                  name='thumb_image'
                  onChange={handleInput}
                />
                <img id="thumbImg" src={ThumbExample} alt="Not Found" />
              </div>
            </>
          )}
        </Content>
        {!loading && (
          <ButtonDark text='Add' callback={handleSubmit} />
        )}
        {loading && (
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
