import { useState, useEffect } from "react";
// import axios from "axios";
// API
import API from '../API';

const initialState = {
  results: []
}

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAnimes = async () => {
    try {
      setError(false);
      setLoading(true);

      const animes = await API.fetchAnimes();

      setState(prev => ({
        ...animes,
        results:
          [...animes]
      }))

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    setState(initialState);
    fetchAnimes();
  }, []);

  

  return { state, loading, error, setIsLoading };

}


