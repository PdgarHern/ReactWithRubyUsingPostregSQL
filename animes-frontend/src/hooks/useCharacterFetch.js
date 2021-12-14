import { useState, useEffect } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

export const useCharacterFetch = characterId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        setError(false);

        const character = await API.fetchCharacter(characterId);

        setState({
          ...character
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }

      const sessionState = isPersistedState(`character${characterId}`);

      if (sessionState) {
        setState(sessionState);
        setLoading(false);
        return;
      }
    }

    fetchCharacter();
  }, [characterId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(`character${characterId}`, JSON.stringify(state));
  }, [characterId, state]);

  return { state, loading, error };
}
