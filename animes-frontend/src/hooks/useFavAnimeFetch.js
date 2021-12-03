import { useState, useEffect } from "react";
import API from "../API";

export const useFavAnimeFetch = userId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFavAnimes = async () => {
      try {
        setLoading(true);
        setError(false);

        const favAnimes = await API.fetchFavouriteAnimes(userId);

        setState({
          ...favAnimes
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    fetchFavAnimes();
  }, [userId]);

  return { state, loading, error };
}
