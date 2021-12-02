import { useState, useEffect } from "react";
import API from "../API";

export const useUserInfoFetch = userId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        const userInfo = await API.fetchInfo(userId);

        setState({
          ...userInfo
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    fetchUserInfo();
  }, [userId]);

  return { state, loading, error };
}
