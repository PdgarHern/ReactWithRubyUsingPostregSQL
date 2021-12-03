import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Character from "./CharacterC";
import ButtonDark from "./ButtonDark";
import Spinner from "./Spinner";
// Hooks
import { useAnimeFetch } from "../hooks/useAnimeFetch";
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Image
import NoImage from "../images/NoThumb.png";

const AnimeCharacters = () => {
  const { animeId } = useParams();

  const { state: anime, loading, error } = useAnimeFetch(animeId);
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const navigate = useNavigate();

  let admin = false;

  if (error) return <div>Something went wrong...</div>;

  const handleAddButton = () => {
    navigate(`/post-character/${animeId}`);
  }

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
      {!loading && (
        <>
          <BreadCrumb animeTitle={anime.title} linkPath={`/${animeId}`} />
          <Grid header="Characters">
            {anime.characters.map(character => (
              <Character
                key={character.id}
                clickable
                characterId={character.id}
                name={character.name}
                imageUrl={
                  character.img == null
                    ? NoImage
                    : character.img.url
                }
              />
            ))}
          </Grid>
          {localStorage.userToken && admin && (
            <ButtonDark text="Add Character" callback={handleAddButton} />
          )}
        </>
      )}
      {loading && <Spinner />}
    </>
  )
}

export default AnimeCharacters;
