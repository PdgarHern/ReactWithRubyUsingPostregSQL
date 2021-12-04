import { useState, useEffect } from "react";
import API from "../API";

export const useFavCharacterFetch = userId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFavCharacters = async () => {
      try {
        setLoading(true);
        setError(false);

        const favCharacters = await API.fetchFavouriteCharacters(userId);

        setState({
          ...favCharacters
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    fetchFavCharacters();
  }, [userId]);

  return { state, loading, error };
}
