import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Image } from "antd";
import SRCimg from "../../Helpers/SRCimg";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Link, useParams } from "react-router-dom";
import SRCimgSlid from "../../Helpers/SRCimgSlid";
export default function Gallery() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`movie/${id}/images?${KeyAPI}`)
      .then(function (res) {
        setData(res.data.backdrops.slice(0,15));
        setLoading(false);
        console.log(data, "slid");
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
  function renderImage() {
    return data.map(({ file_path }) => {
      return (
        <Image
          key={file_path}
          width={200}
          src={`${SRCimgSlid}${file_path}`}
          style={{
            margin: "0.5em",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginLeft: "1em",
          }}
        />
      );
    });
  }
  return (
    <div className="col-5">
      <h2>Gallery</h2>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        {renderImage()}
      </Image.PreviewGroup>
    </div>
  );
}
