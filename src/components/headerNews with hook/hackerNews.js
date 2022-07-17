import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("react");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handlePress = (e) => {
    if (e.keycode === 13) {
      console.log("enter");
      setQuery(value);
    } else {
      return;
    }
  };
  const handleClick = (e) => {
    setQuery(value);
    inputRef.current.focus();
    setValue("");
  };
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    try {
      const handleFetchingData = async () => {
        setLoading(true);
        const res = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${query}`,
          {
            cancelToken: ourRequest.token,
          }
        );
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
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className={`block border-2 px-4 py-2 ${
            inputRef.current ? "border-2 border-blue-500" : ""
          }`}
          value={value}
          onChange={(e) => handleInput(e)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
          onKeyPress={(e) => handlePress(e)}
          onClick={(e) => handleClick(e)}>
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading &&
        data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div className="p-3 bg-gray-100 m-2 rounded-lg inline-block text-sm">
              <span key={item.id}>{item.title}</span>
            </div>
          );
        })}
    </div>
  );
};

export default HackerNews;
