import React from "react";
// Components
import HeroImage from "./HeroImage";
import HomeContent from "./HomeContent";
import Thumb from "./Thumb";
import HomeBar from "./HomeBar";
import Spinner from "./Spinner";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/NoThumb.png";
import NoPoster from "../images/NoPoster.png";


const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  if (error) return <div>Something went wrong...</div>;

  let randomNumber = Math.floor(Math.random() * (state.results.length));
  let randomNumber2 = Math.floor(Math.random() * (state.results.length));
  let randomNumber3 = Math.floor(Math.random() * (state.results.length));


  return (
    <>
      {console.log(`1: ${randomNumber}`)}
      {console.log(`2: ${randomNumber2}`)}
      {state.results[randomNumber] ? (
        <HeroImage
          image={state.results[randomNumber].poster == null | state.results[randomNumber].poster == ""
            ? NoPoster
            : state.results[randomNumber].poster.url}
          clickable
          title={state.results[randomNumber].title}
          text={state.results[randomNumber].plot}
          animeId={state.results[randomNumber].id}
        />
      ) : null}
      <HomeBar />
      {state.results[randomNumber2] && state.results[randomNumber3] ? (
        <HomeContent>
          <div className="CheckInfo">
            <h1>Check information about your favourite animes</h1>
            <div className="Content">
              <div className="Thumb">
                <Thumb
                  image={
                    state.results[randomNumber2].thumb == null
                      ? NoImage
                      : state.results[randomNumber2].thumb.url
                  }
                  clickable
                  animeId={state.results[randomNumber2].id}
                />
              </div>
              <div className="Text">
                <h1>{state.results[randomNumber2].title}</h1>
                <p>{state.results[randomNumber2].premiered}</p>
                <h1>Demographic</h1>
                <p>{state.results[randomNumber2].demographic}</p>
                <h1>Author</h1>
                <p>{state.results[randomNumber2].author}</p>
              </div>
            </div>
          </div>
          <div className="DiscoverInfo">
            <h1>Discover new and awesome series to watch</h1>
            <div className="Content">
              <div className="Thumb">
                <Thumb
                  image={
                    state.results[randomNumber3].thumb == null
                      ? NoImage
                      : state.results[randomNumber3].thumb.url
                  }
                  clickable
                  animeId={state.results[randomNumber3].id}
                />
              </div>
              <div className="Text">
                <h1>{state.results[randomNumber3].title}</h1>
                <p>{state.results[randomNumber3].premiered}</p>
                <h1>Demographic</h1>
                <p>{state.results[randomNumber3].demographic}</p>
                <h1>Author</h1>
                <p>{state.results[randomNumber3].author}</p>
              </div>
            </div>
          </div>
        </HomeContent>
      ) : null}
      {loading && <Spinner />}
    </>
  )
}

export default Home;
