import React, { useState } from "react";
import useHackernews from "../../customHook/useHackerNews";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("react");
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    setQuery(value);
    inputRef.current.focus();
    setValue("");
  };
  const { data, loading, inputRef } = useHackernews(
    `https://hn.algolia.com/api/v1/search?query=${query}`, query
  );
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

export default HackerNewsWithHook;
