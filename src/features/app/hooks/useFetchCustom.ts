import { useState, useEffect } from "react";

type FetchState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

const useFetch = <T>(
  url: string,
  options?: RequestInit,
  method: "GET" | "POST" = "GET"
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: method,
          ...options,
        });

        if (!response.ok) throw new Error("Network response was not ok");
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, method]);

  return { data, error, loading };
};

export default useFetch;
