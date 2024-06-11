import ReactPlayer from "react-player";
import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import Style from "./style";

export default function Video() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    API.get(`movie/${id}/videos?${KeyAPI}`)
      .then(function (res) {
        setData(res.data.results.slice(0, 1));
        setLoading(false);
        console.log(data, "video");
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
 
  function renderVideo() {
    return data.map(({ key }) => {
      return (
        <div key={key}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      );
    });
  }
  return (
    <Style>
      <h3 className="pt-5 pb-5">Trailer</h3>
      <div className="video ot-5">{renderVideo()}</div>
    </Style>
  );
}
