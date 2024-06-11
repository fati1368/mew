import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { DetailMovie } from "../../Components/DetailMovie";
import Credit from "../../Components/Credit";
import Gallery from "../../Components/Gallery";
import PosterPic from "../../Components/PosterPic";
import { palette } from "../../Style/Theme";
import TitleSingleItemTV from "../../Components/TitleSingleItemTV";
import ReactPlayer from "react-player";
import Video from "../../Components/Video";
import Recommendations from "../../Components/recommendations";

export default function SingleItemTV() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [writerFilter, setWriterFilter] = useState([]);
  const [directorFilter, setDirectorFilter] = useState([]);

  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id ]);
  function getAPI() {
    API.get(`tv/${id}?${KeyAPI}`)
      .then(function (res) {
        setData(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }
  const handleWriter = (writerFilter) => {
    setWriterFilter(writerFilter);
  };
  const handleDirector = (directorFilter) => {
    setDirectorFilter(directorFilter);
  };
  return (
    <PrimaryLayout>
      {loading === true ? (
        <h3>Please Waite</h3>
      ) : (
        <section>
          <DetailMovie
            dateRelease={data.first_air_date}
            data={data}
            writer={writerFilter}
            director={directorFilter}
            currentData="tv"
          />
          <div className=" flex container ">
            <div className="col-9">
              <TitleSingleItemTV
                data={data}
                colorTitle={palette.fontColorSection}
              />
              <div>
                <h2 className="pb-5 pt-5">Gallery</h2>
                <div className="flex align-center">
                  <Gallery currentData="tv" />
                  <PosterPic poster={data.poster_path} currentData="tv" />
                </div>
                <Video currentData="tv" />
              </div>
            </div>
            <div className="col-3">
              <Credit
                currentData="tv"
                callBackWriter={handleWriter}
                callBackDirector={handleDirector}
              />
            </div>
          </div>
          <Recommendations currentData="tv" />
        </section>
      )}
    </PrimaryLayout>
  );
}
