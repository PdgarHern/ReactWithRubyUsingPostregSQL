import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Character from "./CharacterC";
import Spinner from "./Spinner";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
import { useCharacterPageFetch } from "../hooks/useCharacterPageFetch";
import { useFavCharacterFetch } from "../hooks/useFavCharacterFetch";
// Image
import NoImage from "../images/NoThumb.png";

const FavouriteCharacters = () => {
  const { userId } = useParams();

  const { state, loading } = useCharacterPageFetch();
  const { state: info } = useUserInfoFetch(userId);
  const { state: favCharacters } = useFavCharacterFetch(userId);

  const navigate = useNavigate();

  let characters = [];

  const getFavCharacters = () => {
    state.results.map((character) => {
      for (const f in favCharacters) {
        if (character.id === favCharacters[f].character_identificator) {
          characters.push(character);
          break;
        }
      }
    })
  }

  const handleAuth = () => {
    navigate('/login');
  }

  return (
    <>
      {!localStorage.userId && (
        handleAuth()
      )}
      {info[0] && (
        <BreadCrumb animeTitle={info[0].user_name} linkPath={`/user-page/${userId}`} />
      )}
      {favCharacters && state && (
        getFavCharacters()
      )}
      <Grid header='Favourite Characters'>
        {characters.map(character => (
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
      {loading && <div className="spinner"><Spinner /></div>}
    </>
  )
}

export default FavouriteCharacters;
