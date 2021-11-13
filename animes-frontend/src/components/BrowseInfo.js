import React from "react";
// Components
import Grid from "./Grid";
import Thumb from "./Thumb";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

const BrowseInfo = () => {
  const { state, loading, error, setIsLoading } = useHomeFetch();

  if (error) return <div>Something went wrong...</div>

  return (
    <Grid header='Animes'>
      {state.results.map(anime => (
        <Thumb
          key={anime.id}
          clickable
          image={anime.thumb}
          animeId={anime.id}
        />
      ))}
    </Grid>
  )

}

export default BrowseInfo;