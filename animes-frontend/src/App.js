import React from "react";
import { Link } from "react-router-dom";
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import BrowseInfo from "./components/BrowseInfo";
import Anime from "./components/Anime";
import PostAnime from "./components/PostAnime";
import UpdateAnime from "./components/UpdateAnime";
import UpdateAnimeImgs from "./components/UpdateAnimeImgs";
import Actor from "./components/ActorPage";
import PostActor from "./components/PostActor";
import UpdateActor from "./components/UpdateActor";
import UpdateActorImg from "./components/UpdateActorImg";
import Characters from "./components/CharacterPage";
import AnimeCharacters from "./components/AnimeCharacters";
import CharacterInfo from "./components/CharacterInfoPage";
import PostCharacter from "./components/PostCharacter";
import UpdateCharacter from "./components/UpdateCharacter";
import UpdateCharacterImg from "./components/UpdateCharacterImg";
import Login from "./components/Login";
import Register from "./components/Register";
import UserPage from "./components/UserPage";
import UpdateUserInfo from "./components/UpdateUserInfo";
import UpdateUserPic from "./components/UpdateUserPic";
import FavouriteAnimes from "./components/FavouriteAnimes";
import FavouriteCharacters from "./components/FavouriteCharacters";
import Header from "./components/Header";
import Logout from "./components/Logout";
// Hook
import { useUserInfoFetch } from "./hooks/useUserInfoFetch";
// Context
import UserProvider from "./context";
// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  const { state: info } = useUserInfoFetch(localStorage.userId);

  let admin = false;

  const handleAdmin = () => {
    if (info[0].is_admin) {
      admin = true;
    }
  }

  return (
    <>
      {info[0] && (
        handleAdmin()
      )}
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path='/logout' element={<Logout />} />
            <Route path='/post-anime' element={<PostAnime />} />
            <Route path='/update-anime/:animeId' element={<UpdateAnime />} />
            <Route path='/update-anime-imgs/:animeId' element={<UpdateAnimeImgs />} />
            <Route path='/post-actor/:animeId' element={<PostActor />} />
            <Route path='/update-actor/:actorId' element={<UpdateActor />} />
            <Route path='/update-actor-img/:actorId' element={<UpdateActorImg />} />
            <Route path='/post-character/:animeId' element={<PostCharacter />} />
            <Route path='/update-character/:characterId' element={<UpdateCharacter />} />
            <Route path='/update-character-img/:characterId' element={<UpdateCharacterImg />} />
            <Route path='/favourite-animes/:userId' element={<FavouriteAnimes />} />
            <Route path='/favourite-characters/:userId' element={<FavouriteCharacters />} />
            <Route path='/' element={<Home />} />
            <Route path='/anime/:animeId' element={<Anime />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/browse-info' element={<BrowseInfo />} />
            <Route path='/actor/:actorId' element={<Actor />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/characters/:animeId' element={<AnimeCharacters />} />
            <Route path='/character/info/:characterId' element={<CharacterInfo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user-page/:userId' element={<UserPage />} />
            <Route path='/update-user-info/:userId' element={<UpdateUserInfo />} />
            <Route path='/update-user-pic/:userId' element={<UpdateUserPic />} />
          </Routes>
          <GlobalStyle />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
