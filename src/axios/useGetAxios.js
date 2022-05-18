import React, { useState, useEffect } from "react";
import HttpService from "../axios/HttpService";

const useGetAxios = (url, needToken = false) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await HttpService.get(
          url,
          needToken && { headers: { token: localStorage.getItem("token") } }
        );
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, loading, error };
};

export default useGetAxios;
