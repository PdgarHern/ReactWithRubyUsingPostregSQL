import React from "react";
import { Link } from "react-router-dom";
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

  if (error) return <div>Something went wrong...</div>

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
        <Link to={`/post-anime`}>
          <ButtonDark text="Add Anime" callback={false} />
        </Link>
      )}
    </>
  )

}

export default BrowseInfo;