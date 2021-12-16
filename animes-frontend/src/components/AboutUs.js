import React from "react";
// Components
import Footer from "./Footer";
// Styles
import { Wrapper } from "./AboutUs.styles";

const AboutUs = () => (
  <>
    <Wrapper>
      <h1>Welcome to our page</h1>
      <p>In our page, you can browse info about every famous anime, the ones you like and the ones you will as well.</p>
      <p>Here you can see information about the story of every anime, as well as from its autor, the animation studio that made it and the actors involved in each anime.</p>
      <br />
      <h1>Create an account</h1>
      <p>By creating an account you can access create a "Favourites Animes" list. You will be able to add and delete animes from the list as you wish and use it to know what to watch next, or to save and remember the series that you liked the most.</p>
      <br />
      <br />
      <h1>Our ever expanding database</h1>
      <p>In our page we manage a lot of information, but we always have some space for more. Apart from the animes, we also store information about the Animation Studios themselves.</p>
      <p>Furthermore, when you check the info about an anime, you can also enter to a page in wich you can browse some information about the characters from that serie.</p>
      <p>If you have an account in our page, you may as well create a "Favourite Characters" list.</p>
      <p>Our admins are always adding and updating the database, so stay tuned to discover whats new in our page.</p>
    </Wrapper>
    <Footer />
  </>
);

export default AboutUs;