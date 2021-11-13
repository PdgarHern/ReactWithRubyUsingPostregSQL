import axios from 'axios';
import {
  API_URL,
  GET_ANIMES
} from './config';

const apiSettings = {
  fetchAnimes: async () => {
    const endpoint = `${GET_ANIMES}`;
    return await (await fetch(endpoint)).json();
  },
  fetchAnime: async animeId => {
    const endpoint = `${GET_ANIMES}/${animeId}`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;
