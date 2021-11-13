import { useState, useEffect } from "react";
import API from "../API";

export const useAnimeFetch = animeId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        setError(false);

        const anime = await API.fetchAnime(animeId);

        setState({
          ...anime
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    fetchAnime();
  }, [animeId]);

  return { state, loading, error };
}
