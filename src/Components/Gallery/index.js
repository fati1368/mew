import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Image } from "antd";
import SRCimg from "../../Helpers/SRCimg";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Link, useParams } from "react-router-dom";
import SRCimgSlid from "../../Helpers/SRCimgSlid";
export default function Gallery({ currentData }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`${currentData === "tv" ? "tv" : "movie"}/${id}/images?${KeyAPI}`)
      .then(function (res) {
        setData(res.data.backdrops.slice(0, 15));
        setLoading(false);
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
          width={175}
          src={`${SRCimgSlid}${file_path}`}
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />
      );
    });
  }
  return (
    <div className="gallery col-8">
      {data === null ? (
        ""
      ) : (
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {renderImage()}
        </Image.PreviewGroup>
      )}
    </div>
  );
}
