import React from "react";
import { useParams } from "react-router-dom";
// Config
import { POSTER_SIZE } from "../config";
// Components
import HeroImage from "./HeroImage";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import BreadCrumb from "./BreadCrumb";
import AnimeInfo from "./AnimeInfo";

const Anime = () => {
  const { animeId } = useParams();

  const {state: anime, loading, error} = useAnimeFetch(animeId);

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb animeTitle={anime.title} />
      <AnimeInfo anime={anime} />
    </>
  )
}

export default Anime;
