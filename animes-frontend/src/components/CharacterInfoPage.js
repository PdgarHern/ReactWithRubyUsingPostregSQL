import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import CharacterInfo from "./CharacterInfo";
import CharacterBar from "./CharacterBar";
import Spinner from "./Spinner";
// Hook
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import { useCharacterFetch } from "../hooks/useCharacterFetch";
// Image
import NoPoster from "../images/NoPoster.png";

const CharacterInfoPage = () => {
  const { characterId } = useParams();

  const { state: character, loading, error } = useCharacterFetch(characterId);

  const { state: anime } = useAnimeFetch(character.anime_id);

  const navigate = useNavigate();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!loading && (
        <>
          <BreadCrumb animeTitle={anime.title} linkPath={`/characters/${anime.id}`} />
          <CharacterInfo character={character} poster={anime.poster} />
          <CharacterBar character={character} animeId={character.anime_id} />
        </>
      )}
      {loading && (
        <div className="spinner"><Spinner /></div>
      )}
    </>
  )
}

export default CharacterInfoPage;
