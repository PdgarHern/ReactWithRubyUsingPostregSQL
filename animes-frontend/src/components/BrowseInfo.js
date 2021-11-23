import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Grid from "./Grid";
import Thumb from "./Thumb";
import ButtonDark from "./ButtonDark";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
// Hooks
import { useBrowseInfoFetch } from "../hooks/useBrowseInfoFetch";
// Image
import NoImage from "../images/NoThumb.png";

const BrowseInfo = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useBrowseInfoFetch();

  const navigate = useNavigate();

  if (error) return <div>Something went wrong...</div>

  const handleAddButton = () => {
    navigate('/post-anime');
  }

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header='Animes'>
        {state.results.map(anime => (
          <Thumb
            key={anime.id}
            clickable
            image={
              anime.thumb == "" | anime.thumb == null
                ? NoImage
                : anime.thumb.url
            }
            animeId={anime.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <ButtonDark text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      {!loading && (
        <ButtonDark text="Add Anime" callback={handleAddButton} />
      )}
    </>
  )

}

export default BrowseInfo;