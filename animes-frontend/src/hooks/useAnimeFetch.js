import { useState, useEffect } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

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

    const sessionState = isPersistedState(`anime${animeId}`);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchAnime();
  }, [animeId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(`anime${animeId}`, JSON.stringify(state));
  }, [animeId, state]);

  return { state, loading, error };
}
