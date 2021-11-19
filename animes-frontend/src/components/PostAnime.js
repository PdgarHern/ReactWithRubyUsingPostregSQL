import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Styles
import { Wrapper } from "./PostAnime.styles";
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
  const [poster, setPoster] = useState(null);
  const [thumb, setThumb] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('plot', plot);
    // formData.append('genres', genres);
    // formData.append('author', author);
    // formData.append('studio', studio);
    // formData.append('premiered', premiered);
    // formData.append('demographic', demographic);
    // formData.append('episodes', episodes);
    // formData.append('poster_image', poster);
    // formData.append('thumb_image', thumb);

    const body = { title: title, plot: plot, genres: genres, author: author, studio: studio, premiered: premiered, demographic: demographic, episodes: episodes, poster: poster, thumb: thumb };

    await API.postAnime(body);

    setLoading(false);

    navigate(`/browse-info`);

  }

  const convertBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
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
    if (name === 'poster_image') setPoster(await convertBase64(e.currentTarget.files[0]));
    if (name === 'thumb_image') setThumb(await convertBase64(e.currentTarget.files[0]));

  }

  return (
    <Wrapper>
      {error && <div className="error">There was an error...</div>}
      {!loading && (
        <>
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
          <label>Poster</label>
          <input
            type='file'
            name='poster_image'
            onChange={handleInput}
          />
          <label>Thumb</label>
          <input
            type='file'
            name='thumb_image'
            onChange={handleInput}
          />
          <ButtonDark text='Add' callback={handleSubmit} />
        </>
      )}
      {loading && (
        <>
          <Spinner />
          <div>Processing your request...</div>
        </>
      )}
    </Wrapper>
  )
}

export default PostAnime;
