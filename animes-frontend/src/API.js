import axios from 'axios';
import {
  API_URL,
  GET_ANIMES
} from './config';

const apiSettings = {
  fetchAnimes: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${GET_ANIMES}?query=${searchTerm}&page=${page}`
      : `${GET_ANIMES}?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchAnime: async animeId => {
    const endpoint = `${GET_ANIMES}/${animeId}`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;
