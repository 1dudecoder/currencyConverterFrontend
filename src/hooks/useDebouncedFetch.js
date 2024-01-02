import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useDebouncedFetch = (url, delay) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = debounce(fetchData, delay);

  useEffect(() => {
    debouncedFetchData();
    // Cleanup debounce on unmount
    return () => debouncedFetchData.cancel();
  }, [url, debouncedFetchData]);

  return { data, loading };
};

export default useDebouncedFetch;
