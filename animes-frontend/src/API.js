import axios from 'axios';
import {
  API_URL,
  ANIMES,
  ACTORS,
  CHARACTERS,
  USERS
} from './config';

const saveInLocalStorage = userDetails => {
  localStorage.setItem('userId', userDetails.data.message.id);
  localStorage.setItem('userToken', userDetails.headers.authorization);
}

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
  deleteActor: async actorId => {
    const endpoint = `${ACTORS}/${actorId}`;
    return await (await axios.delete(endpoint));
  },
  updateActor: async (actorId, body) => {
    const endpoint = `${ACTORS}/${actorId}`;
    return await (await axios.put(endpoint, body));
  },


  // Character
  fetchCharacters: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${CHARACTERS}?query=${searchTerm}&page=${page}`
      : `${CHARACTERS}?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCharacter: async characterId => {
    const endpoint = `${CHARACTERS}/${characterId}`;
    return await (await fetch(endpoint)).json();
  },
  postCharacter: async body => {
    const endpoint = `${CHARACTERS}`;
    return await (await axios.post(endpoint, body));
  },
  deleteCharacter: async characterId => {
    const endpoint = `${CHARACTERS}/${characterId}`;
    return await (await axios.delete(endpoint));
  },
  updateCharacter: async (characterId, body) => {
    const endpoint = `${CHARACTERS}/${characterId}`;
    return await (await axios.put(endpoint, body));
  },

  // User
  createUser: async body => {
    const endpoint = `${USERS}`;
    return await (await axios.post(endpoint, body));
  },
  login: async body => {
    const endpoint = `${USERS}/sign_in`;
    return await (await axios.post(endpoint, body).then((response) => {
      saveInLocalStorage(response);
    }));
  },
  logout: async () => {
    const endpoint = `${USERS}/sign_out`;
    return await (await axios.delete(endpoint, {headers: {'Authorization': localStorage.userToken}}))
  }
};

export default apiSettings;
