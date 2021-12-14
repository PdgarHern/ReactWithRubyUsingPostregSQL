import { useState, useEffect } from "react";
// API
import API from "../API";
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0
}

export const useCharacterPageFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchCharacters = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const characters = await API.fetchCharacters(searchTerm, page);

      setState(prev => ({
        ...characters,
        results:
          page > 1 ? [...prev.results, ...characters.results] : [...characters.results]
      }))

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial and Search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('charactersState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetchCharacters(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchCharacters(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('charactersState', JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };

}