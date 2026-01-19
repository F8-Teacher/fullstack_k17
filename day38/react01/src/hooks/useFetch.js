import { useEffect, useState } from "react";

//fetch --> promise chứa dữ liệu cần xử lý
export const useFetch = (fetcher) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const handleFetcher = async () => {
      try {
        const data = await fetcher();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    handleFetcher();
  }, []);
  return { data, isLoading, error };
};
