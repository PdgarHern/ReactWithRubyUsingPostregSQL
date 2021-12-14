import { useState, useEffect } from "react";
// API
import API from '../API';
// Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0
}

export const useBrowseInfoFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchAnimes = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const animes = await API.fetchAnimes(searchTerm, page);

      setState(prev => ({
        ...animes,
        results:
          page > 1 ? [...prev.results, ...animes.results] : [...animes.results]
      }))

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial and Search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('browseInfoState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetchAnimes(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchAnimes(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('browseInfoState', JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };

}


