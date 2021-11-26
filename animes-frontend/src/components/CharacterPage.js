import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Grid from "./Grid";
import Character from "./CharacterC";
import ButtonDark from "./ButtonDark";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
// Hooks
import { useCharacterPageFetch } from "../hooks/useCharacterPageFetch";
// Image
import NoImage from "../images/NoThumb.png";

const CharacterPage = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useCharacterPageFetch();

  const navigate = useNavigate();

  if (error) return <div>Something went wrong...</div>

  const handleAddButton = () => {
    navigate('/');
  }

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header='Characters'>
        {state.results.map(character => (
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
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <ButtonDark text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  )
}

export default CharacterPage;
