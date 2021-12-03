import React from "react";
import { useParams } from "react-router-dom";
// Components
import BreadCrumb from "./BreadCrumb";
// Hook
import { useUserInfoFetch } from "../hooks/useUserInfoFetch";

const FavouriteCharacters = () => {
  const { userId } = useParams();

  const { state: info } = useUserInfoFetch(userId);

  return (
    <>
      {info[0] && (
        <BreadCrumb animeTitle={info[0].user_name} linkPath={`/user-page/${userId}`} />
      )}
      
    </>
  )
}

export default FavouriteCharacters;
