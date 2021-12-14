import { useState, useEffect } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

export const useActorFetch = actorId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActor(actorId);

        setState({
          ...actor
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    const sessionState = isPersistedState(`actor${actorId}`);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchActor();
  }, [actorId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(`actor${actorId}`, JSON.stringify(state));
  }, [actorId, state]);

  return { state, loading, error };
}