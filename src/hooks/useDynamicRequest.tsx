import { AxiosPromise } from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useDynamicRequest = (
  request: (params: string) => AxiosPromise,
  params: string
): useDynamicRequestReturn => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(false);

  const resetStates = () => {
    setLoading(false);
    setData(undefined);
    setSuccess(false);
    setError(false);
  };

  const tryAgain = () => {
    setRetry((prev) => !prev);
  };

  useEffect(() => {
    console.log("aksdopjaisdhji");
  }, [params]);

  useEffect(() => {
    resetStates();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await request(params);
        if (response) {
          setData(response.data);
          setSuccess(true);
          setError(false);
        }
      } catch (err) {
        console.log("Error: ", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (params !== "") {
      useDebounce(fetchData);
    }
  }, [retry]);

  return {
    loading,
    data,
    success: data !== undefined,
    error,
    tryAgain,
  };
};

interface useDynamicRequestReturn {
  loading: boolean;
  data: any;
  success: boolean;
  error: boolean;
  tryAgain: () => void;
}
