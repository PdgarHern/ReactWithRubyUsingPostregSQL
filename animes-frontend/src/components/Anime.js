import React from "react";
import { useParams } from "react-router-dom";
// Config
import { POSTER_SIZE } from "../config";
// Components
import BreadCrumb from "./BreadCrumb";
import AnimeInfo from "./AnimeInfo";
import AnimeBar from "./AnimeBar";
import Spinner from "./Spinner";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";

const Anime = () => {
  const { animeId } = useParams();

  const {state: anime, loading, error} = useAnimeFetch(animeId);

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!loading ? (
        <>
        <BreadCrumb animeTitle={anime.title} linkPath={'/browse-info'} />
        <AnimeInfo anime={anime} />
        <AnimeBar anime={anime} />
        </>
      ) : null}
      {loading && <Spinner />}      
    </>
  )
}

export default Anime;
