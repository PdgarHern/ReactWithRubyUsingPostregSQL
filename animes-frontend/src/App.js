import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import BrowseInfo from "./components/BrowseInfo";
import Anime from "./components/Anime";
import Header from "./components/Header";
// Context
import UserProvider from "./context";
// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  // let randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;

  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:animeId' element={<Anime />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/browse-info' element={<BrowseInfo />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </Router>
  );
}

export default App;
