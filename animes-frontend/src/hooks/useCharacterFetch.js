import { useState, useEffect } from "react";
import API from "../API";

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
    }

    fetchCharacter();
  }, [characterId]);

  return { state, loading, error };
}
