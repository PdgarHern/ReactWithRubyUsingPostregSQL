import React from "react";
import { useParams } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Character from "./CharacterC";
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

  return (
    <>
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
    </>
  )
}

export default FavouriteCharacters;
