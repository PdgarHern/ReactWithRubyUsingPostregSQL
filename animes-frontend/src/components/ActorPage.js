import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import { useActorFetch } from "../hooks/useActorFetch";
// Image
import NoImage from "../images/NoThumb.png";

const ActorPage = () => {
  const { actorId } = useParams();

  const { state: actor, loading, error } = useActorFetch(actorId);

  const { state: anime } = useAnimeFetch(actor.anime_id);  

  const navigate = useNavigate();

  if (error) return <div>Something went wrong...</div>

  return (
    <>
      {!loading && (
        <>
          <BreadCrumb animeTitle={anime.title} linkPath={`/${anime.id}`} />
        </>
      )}
      {loading && <Spinner />}
    </>
  )
}

export default ActorPage;
