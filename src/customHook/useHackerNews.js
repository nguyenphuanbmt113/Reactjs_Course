import axios from "axios";
import { useEffect, useRef, useState } from "react";

const useHackernews = (url, query) => {
  const [data, setData] = useState([]);
 
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);


  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    try {
      const handleFetchingData = async () => {
        setLoading(true);
        const res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        const data = res ? res.data.hits : [];
        setData(data);
        setLoading(false);
      };
      handleFetchingData();
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log("request canceled: ", e.message);
      } else {
        setLoading(true);
        console.log(">>>>>>check error: ", e);
      }
    }
    return () => {
      ourRequest.cancel("canceled by the user");
    };
  }, [query]);
  return {
    data,
    loading,
    inputRef,
  };
};

export default useHackernews;
