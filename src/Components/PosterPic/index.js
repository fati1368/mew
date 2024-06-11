import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Image } from "antd";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Link, useParams } from "react-router-dom";
import SRCimgSlid from "../../Helpers/SRCimgSlid";
import SRCimg from "../../Helpers/SRCimg";
import Style from "./style";

export default function PosterPic({ poster }) {
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
        setData(res.data.posters);
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
  function renderImage() {
    return data.map(({ file_path }) => `${SRCimgSlid}${file_path}`);
  }

  return (
    <Style>
      <div className="col-5">
        <h2 className="title">More </h2>
        <Image.PreviewGroup items={renderImage()}>
          <Image width={200} src={`${SRCimg}${poster}`} />
        </Image.PreviewGroup>
      </div>
    </Style>
  );
}
