import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";
import { useFavAnimeFetch } from "../hooks/useFavAnimeFetch";
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/NoThumb.png";

const FavouriteAnimes = () => {
  const { userId } = useParams();

  const { state, loading } = useHomeFetch();
  const { state: info } = useUserInfoFetch(userId);
  const { state: favAnimes } = useFavAnimeFetch(userId);

  const navigate = useNavigate();

  let animes = [];

  const getFavAnimes = () => {
    state.results.map((anime) => {
      
    })

    for (const f in favAnimes) {
      console.log(f);
    }
  }

  return (
    <>
      {info[0] && (
        <BreadCrumb animeTitle={info[0].user_name} linkPath={`/user-page/${userId}`} />
      )}
      {favAnimes && state && (
        getFavAnimes()
      )}
      <Grid header='Favourite Animes'>
        {animes.map(anime => (
          <Thumb
            key={anime.id}
            clickable
            image={
              anime.thumb == null
                ? NoImage
                : anime.thumb.url
            }
            animeId={anime.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
    </>
  )
}

export default FavouriteAnimes;
