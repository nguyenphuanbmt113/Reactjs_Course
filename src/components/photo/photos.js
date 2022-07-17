import React, { useEffect, useState } from "react";
import axios from "axios";
import "./photos.scss";
const Photos = () => {
  const [dataPhotos, setDataPhotos] = useState([]);
  // const [limit, setLimit] = useState(8);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = () => {
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    try {
      const fetchingDataPhotos = async () => {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${nextPage}&limit=8`
        );
        const data = res ? res.data : [];
        const newData = [...dataPhotos, ...data];
        setDataPhotos(newData);
      };
      fetchingDataPhotos();
    } catch (e) {
      console.log(">>>>Error:", e.message);
    }
  }, [nextPage]);

  return (
    <div>
      <div className="container columns-4 gap-5 lg:columns-3 sm:columns-2 p-5">
        {dataPhotos &&
          dataPhotos.length > 0 &&
          dataPhotos.map((item) => {
            return (
              <img
                src={item.download_url}
                key={item.id}
                alt={item.author}
                className="mb-5 w-full rounded-lg"
              />
            );
          })}
      </div>
      <div className="text-center mt-7">
        <button
          className="px-8 py-4 bg-purple-500 text-white rounded-lg"
          onClick={() => handleLoadMore()}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
