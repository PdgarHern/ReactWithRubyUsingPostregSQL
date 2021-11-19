import axios from 'axios';
import {
  API_URL,
  GET_ANIMES
} from './config';

const apiSettings = {
  fetchAllAnimes: async () => {
    const endpoint = `${API_URL}/all-animes`;
    return await (await fetch(endpoint)).json();
  },
  fetchAnimes: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${GET_ANIMES}?query=${searchTerm}&page=${page}`
      : `${GET_ANIMES}?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchAnime: async animeId => {
    const endpoint = `${GET_ANIMES}/${animeId}`;
    return await (await fetch(endpoint)).json();
  },
  postAnime: async body => {
    const endpoint = `${GET_ANIMES}`;
    return await (await axios.post(endpoint, body));
  },
  deleteAnime: async animeId => {
    const endpoint = `${GET_ANIMES}/${animeId}`;
    return await (await axios.delete(endpoint));
  },
  updateAnime: async (animeId, body) => {
    const endpoint = `${GET_ANIMES}/${animeId}`;
    return await (await axios.put(endpoint, body));
  }
};

export default apiSettings;
