import { useState, useEffect } from "react";
// import axios from "axios";
// API
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchAnimes = async (page, searchTerm = '') => {
    // try {
      setError(false);
      setLoading(true);

      const animes = await API.fetchAnimes(searchTerm, page);

      setState(prev => ({
        ...animes,
        results:
          page > 1 ? [...prev.results, ...animes.results] : [...animes.results]
      }))

    // } catch (error) {
    //   setError(true);
    // }
    setLoading(false);
  };

  // Initial ans Search
  useEffect(() => {
    setState(initialState);
    fetchAnimes(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchAnimes(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page])

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };

}


