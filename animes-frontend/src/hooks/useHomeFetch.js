import { useState, useEffect } from "react";
// API
import API from '../API';

const initialState = { results: [] }

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAllAnimes = async () => {
    try {
      setError(false);
      setLoading(true);

      const animes = await API.fetchAllAnimes();


      if (animes) {
        setState(prev => ({
          ...animes,
          results:
            [...animes]
        }))
      }
      

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    setState(initialState);
    fetchAllAnimes();
  }, []);

  return { state, loading, error };

}

