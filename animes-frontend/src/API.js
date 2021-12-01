import axios from 'axios';
import {
  API_URL,
  ANIMES,
  ACTORS,
  CHARACTERS,
  USERS,
  USERS_INFO
} from './config';

const saveInLocalStorage = userDetails => {
  if (userDetails.data.message.id == null) {
    throw "error";
  }

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
    return await (await axios.post(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
  },
  deleteAnime: async animeId => {
    const endpoint = `${ANIMES}/${animeId}`;
    return await (await axios.delete(endpoint, {headers: {'Authorization': localStorage.userToken}}));
  },
  updateAnime: async (animeId, body) => {
    const endpoint = `${ANIMES}/${animeId}`;
    return await (await axios.put(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
  },


  // Actor
  fetchActor: async actorId => {
    const endpoint = `${ACTORS}/${actorId}`;
    return await (await fetch(endpoint)).json();
  },
  postActor: async body => {
    const endpoint = `${ACTORS}`;
    return await (await axios.post(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
  },
  deleteActor: async actorId => {
    const endpoint = `${ACTORS}/${actorId}`;
    return await (await axios.delete(endpoint, {headers: {'Authorization': localStorage.userToken}}));
  },
  updateActor: async (actorId, body) => {
    const endpoint = `${ACTORS}/${actorId}`;
    return await (await axios.put(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
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
    return await (await axios.post(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
  },
  deleteCharacter: async characterId => {
    const endpoint = `${CHARACTERS}/${characterId}`;
    return await (await axios.delete(endpoint, {headers: {'Authorization': localStorage.userToken}}));
  },
  updateCharacter: async (characterId, body) => {
    const endpoint = `${CHARACTERS}/${characterId}`;
    return await (await axios.put(endpoint, body, {headers: {'Authorization': localStorage.userToken}}));
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
  },

  // User Info
  fetchInfo: async userId => {
    const endpoint = `${USERS_INFO}?id=${userId}`;
    return await (await fetch(endpoint)).json();
  },
  createInfo: async body => {
    const endpoint = `${USERS_INFO}`;
    return await (await axios.post(endpoint, body));
  },
  deleteInfo: async infoId => {
    const endpoint = `${USERS_INFO}/${infoId}`;
    return await (await axios.delete(endpoint));
  },
  updateInfo: async (infoId, body) => {
    const endpoint = `${USERS_INFO}/${infoId}`;
    return await (await axios.put(endpoint, body));
  }
};

export default apiSettings;
