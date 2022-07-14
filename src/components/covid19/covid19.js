import React, { useEffect, useState } from "react";
import axios from "axios";
import "./covid19.scss";
const Covid19 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z");
      const data = res && res.data ? res.data : [];
      setData(data);
    };
    fetchData();
    setLoading(false)
  }, []);
console.log(">chek:");
  return (
    <>
      {loading === true ? (
        <h1>I am Loading...</h1>
      ) : (
        <div className="container-lg">
          <h1 className="mb-5 text-center">Table Covid19</h1>
          <table>
            <tr>
              <th>Country</th>
              <th>ISO2</th>
              <th>Slug</th>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
          </table>

          <div className="columns-3 sm:columns-2 mt-5 gap-4">
            <img src="https://wallpaperaccess.com/full/17355.jpg" alt="" />
            <img src="https://wallpaperaccess.com/full/17352.jpg" alt="" />
            <img src="https://wallpaperaccess.com/full/17354.jpg" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Covid19;
