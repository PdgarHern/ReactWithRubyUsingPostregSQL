import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import ActorInfo from "./ActorInfo";
import ActorBar from "./ActorBar";
import Spinner from "./Spinner";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import { useActorFetch } from "../hooks/useActorFetch";
// Image
import NoPoster from "../images/NoPoster.png";

const ActorPage = () => {
  const { actorId } = useParams();

  const { state: actor, loading, error } = useActorFetch(actorId);

  const { state: anime } = useAnimeFetch(actor.anime_id);  

  const navigate = useNavigate();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!loading && (
        <>
          <BreadCrumb animeTitle={anime.title} linkPath={`/anime/${anime.id}`} />
          <ActorInfo actor={actor} poster={anime.poster} />
          <ActorBar actor={actor} animeId={actor.anime_id} />
        </>
      )}
      {loading && <Spinner />}
    </>
  )
}

export default ActorPage;
