import React, { useEffect, useState } from "react";
import axios from "axios";
import "./photos.scss";
const Photos = () => {
  const [dataPhotos, setDataPhotos] = useState();
  useEffect(() => {
    //side effect
    try {
      const fetchingDataPhotos = async () => {
        const res = await axios.get("https://picsum.photos/v2/list");
        const data = res ? res.data : [];
        setDataPhotos(data);
      };
      fetchingDataPhotos();
      console.log(dataPhotos);
    } catch (e) {
      console.log(">>>>Error:", e.message);
    }
  }, [dataPhotos]);
  return (
    <div className="container columns-4 gap-5 lg:columns-3 sm:columns-2">
      {dataPhotos &&
        dataPhotos.length > 0 &&
        dataPhotos.map((item) => {
          return <img src={item.download_url} alt="" className="mb-5 w-full" />;
        })}
    </div>
  );
};

export default Photos;
