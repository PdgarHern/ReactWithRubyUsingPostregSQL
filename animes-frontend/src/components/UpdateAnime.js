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
import { Wrapper } from "./Update.styles";
// Context
import { Context } from "../context";

const UpdateAnime = () => {
  const { animeId } = useParams();
  const { state: anime, error } = useAnimeFetch(animeId);

  const [title, setTitle] = useState('');
  const [plot, setPlot] = useState('');
  const [genres, setGenres] = useState('');
  const [author, setAuthor] = useState('');
  const [studio, setStudio] = useState('');
  const [premiered, setPremiered] = useState('');
  const [demographic, setDemographic] = useState('');
  const [episodes, setEpisodes] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpdateImg = () => {
    navigate(`/update-anime-imgs/${anime.id}`);
  }

  const handleValue = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const placeholder = e.currentTarget.placeholder;

    if (name === 'title' && value === '') setTitle(placeholder);
    if (name === 'plot' && value === '') setPlot(placeholder);
    if (name === 'genres' && value === '') setGenres(placeholder);
    if (name === 'author' && value === '') setAuthor(placeholder);
    if (name === 'studio' && value === '') setStudio(placeholder);
    if (name === 'premiered' && value === '') setPremiered(placeholder);
    if (name === 'demographic' && value === '') setDemographic(placeholder);
    if (name === 'episodes' && value === '') setEpisodes(placeholder);
  }

  const handleInput = (e) => {
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

  }

  const handleSubmit = async () => {
    setLoading(true);
    let aTitle = '';
    let aPlot = '';
    let aGenres = '';
    let aAuthor = '';
    let aStudio = '';
    let aPremiered = '';
    let aDemographic = '';
    let aEpisodes = '';

    if (title === '') {  aTitle = anime.title; }
    else {  aTitle = title; }
    if (plot === '') {  aPlot = anime.plot; }
    else {  aPlot = plot; }
    if (genres === '') {  aGenres = anime.genres; }
    else {  aGenres = genres; }
    if (author === '') {  aAuthor = anime.author; }
    else {  aAuthor = author; }
    if (studio === '') {  aStudio = anime.studio; }
    else {  aStudio = studio; }
    if (premiered === '') {  aPremiered = anime.premiered; }
    else {  aPremiered = premiered; }
    if (demographic === '') {  aDemographic = anime.demographic; }
    else {  aDemographic = demographic; }
    if (episodes === '') {  aEpisodes = anime.episodes; }
    else {  aEpisodes = episodes; }

    const body = { title: aTitle, plot: aPlot, genres: aGenres, author: aAuthor, studio: aStudio, premiered: aPremiered, demographic: aDemographic, episodes: aEpisodes };
    
    await API.updateAnime(animeId, body);
    
    setLoading(false);

    navigate(`/${animeId}`);
  }

  return (
    <>
      <BreadCrumb animeTitle={anime.title} linkPath={`/${anime.id}`} />
      <Wrapper>
        {error && <div className="error">There was an error...</div>}
        {!loading && (
          <>
            <label>Title</label>
            {}
            <input
              type='text'
              placeholder={anime.title}
              value={title}
              name='title'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Plot</label>
            <input
              type='text'
              placeholder={anime.plot}
              value={plot}
              name='plot'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Genres</label>
            <input
              type='text'
              placeholder={anime.genres}
              value={genres}
              name='genres'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Author</label>
            <input
              type='text'
              placeholder={anime.author}
              value={author}
              name='author'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Studio</label>
            <input
              type='text'
              placeholder={anime.studio}
              value={studio}
              name='studio'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Premiered</label>
            <input
              type='number'
              placeholder={anime.premiered}
              value={parseInt(premiered)}
              name='premiered'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Demographic</label>
            <input
              type='text'
              placeholder={anime.demographic}
              value={demographic}
              name='demographic'
              onChange={handleInput}
              onClick={handleValue}
            />
            <label>Episodes</label>
            <input
              type='number'
              placeholder={anime.episodes}
              value={parseInt(episodes)}
              name='episodes'
              onChange={handleInput}
              onClick={handleValue}
            />
            <div className="buttons">
              <ButtonDark text='Update' callback={handleSubmit} />
              <ButtonDark text='Images' callback={handleUpdateImg} />
            </div>
          </>
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

export default UpdateAnime;
