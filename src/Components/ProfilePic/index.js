import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Image } from "antd";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Link, useParams } from "react-router-dom";
import SRCimgSlid from "../../Helpers/SRCimgSlid";
import SRCimg from "../../Helpers/SRCimg";
import Style from "./style";
import SRCProfile from "../../Helpers/SRCProfile";
import SRCProfileAlbum from "../../Helpers/SRCProfileAlbum";

export default function ProfilePic({ profile }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);

  async function getAPI() {
    try {
      const res = await API.get(`person/${id}/images?${KeyAPI}`);
      setData(res.data.profiles);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  function renderImage() {
    return data.map(({ file_path }) => `${SRCProfileAlbum}${file_path}`);
  }

  return (
    <Fragment>
      <Image.PreviewGroup items={renderImage()}>
        <Image height={450} width={300} src={`${SRCProfile}${profile}`} />
      </Image.PreviewGroup>
    </Fragment>
  );
}
