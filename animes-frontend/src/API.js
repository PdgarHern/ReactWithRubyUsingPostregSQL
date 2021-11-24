import axios from 'axios';
import {
  API_URL,
  ANIMES,
  ACTORS
} from './config';

const apiSettings = {
  // Anime
  fetchAllAnimes: async () => {
    const endpoint = `${API_URL}/all-animes`;
    return await (await fetch(endpoint)).json();
  },
  fetchAnimes: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${ANIMES}?query=${searchTerm}&page=${page}`
      : `${ANIMES}?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchAnime: async animeId => {
    const endpoint = `${ANIMES}/${animeId}`;
    return await (await fetch(endpoint)).json();
  },
  postAnime: async body => {
    const endpoint = `${ANIMES}`;
    return await (await axios.post(endpoint, body));
  },
  deleteAnime: async animeId => {
    const endpoint = `${ANIMES}/${animeId}`;
    return await (await axios.delete(endpoint));
  },
  updateAnime: async (animeId, body) => {
    const endpoint = `${ANIMES}/${animeId}`;
    return await (await axios.put(endpoint, body));
  },


  // Actor
  fetchActor: async actorId => {
    const endpoint = `${ACTORS}/${actorId}`;
    return await (await fetch(endpoint)).json();
  },
  postActor: async body => {
    const endpoint = `${ACTORS}`;
    return await (await axios.post(endpoint, body));
  },
};

export default apiSettings;
