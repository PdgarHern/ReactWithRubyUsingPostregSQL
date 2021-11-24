import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import AnimeInfo from "./AnimeInfo";
import AnimeBar from "./AnimeBar";
import Grid from "./Grid";
import Actor from "./Actor";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";
// Image
import NoImage from "../images/NoThumb.png";

const Anime = () => {
  const { animeId } = useParams();

  const {state: anime, loading, error} = useAnimeFetch(animeId);

  const navigate = useNavigate();

  if (error) return <div>Something went wrong...</div>;

  const handleAddButton = () => {
    navigate(`/post-actor/${animeId}`);
  }

  return (
    <>
      {!loading ? (
        <>
        <BreadCrumb animeTitle={anime.title} linkPath={'/browse-info'} />
        <AnimeInfo anime={anime} />
        <AnimeBar anime={anime} />
        <Grid header='Actors'>
          {anime.actors.map(actor => (
            <Actor
              key={actor.id}
              name={actor.name}
              character={actor.character_done}
              imageUrl={
                actor.img
                ? actor.img.url
                : NoImage
              }
            />
          ))}
        </Grid>
        <ButtonDark text="Add Actor" callback={handleAddButton} />
        </>
      ) : null}
      {loading && <Spinner />}      
    </>
  )
}

export default Anime;
