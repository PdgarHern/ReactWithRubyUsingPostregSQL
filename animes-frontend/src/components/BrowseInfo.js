import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import Grid from "./Grid";
import Thumb from "./Thumb";
import ButtonDark from "./ButtonDark";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Spinner from "./Spinner";
// Hooks
import { useBrowseInfoFetch } from "../hooks/useBrowseInfoFetch";
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
// Image
import NoImage from "../images/NoThumb.png";

const BrowseInfo = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useBrowseInfoFetch();
  const { state: info } = useUserInfoFetch(localStorage.userId);

  const navigate = useNavigate();

  let admin = false;

  if (error) return <div>Something went wrong...</div>

  const handleAddButton = () => {
    navigate('/post-anime');
  }

  const handleAdmin = () => {
    if (info[0].is_admin) {
      admin = true;
    }
  }

  console.log(info[0]);

  return (
    <>
      {info[0] && (
        handleAdmin()
      )}
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
      {!loading && !error && <Footer />}
      {loading && <div className="spinner"><Spinner /></div>}
      {state.page < state.total_pages && !loading && (
        <ButtonDark text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      {!loading && localStorage.userToken && admin ? (
        <ButtonDark text="Add Anime" callback={handleAddButton} />
      ) : null}
    </>
  )

}

export default BrowseInfo;
