import { useState, useEffect, Fragment   } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { DetailMovie } from "../../Components/DetailMovie";
import Credit from "../../Components/Credit";
import Gallery from "../../Components/Gallery";
import PosterPic from "../../Components/PosterPic";
import { palette } from "../../Style/Theme";
import TitleSingleItemMovie from "../../Components/TitleSingleItemMovie";
import ReactPlayer from "react-player";
import Video from "../../Components/Video";
import Recommendations from "../../Components/Recommendations";
import { useNavigate } from "react-router-dom";

export default function SingleItemMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [writerFilter, setWriterFilter] = useState([]);
  const [directorFilter, setDirectorFilter] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  API.initialize(navigate);

  useEffect(() => {
    getAPI();
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, location]);
  function getAPI() {
    API.get(`movie/${id}?${KeyAPI}`)
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
            dateRelease={data.release_date}
            data={data}
            writer={writerFilter}
            director={directorFilter}
            currentData="movie"
          />
          <div className=" flex container ">
            <div className="col-9">
              <TitleSingleItemMovie
                data={data}
                colorTitle={palette.fontColorSection}
              />
              <div>
                <h2 className="pb-5 pt-5">Gallery</h2>
                <div className="flex align-center">
                  <Gallery currentData="movie" />
                  <PosterPic poster={data.poster_path} currentData="movie" />
                </div>
                <Video currentData="movie" />
              </div>
            </div>
            <div className="col-3">
              <Credit
                currentData="movie"
                callBackWriter={handleWriter}
                callBackDirector={handleDirector}
              />
            </div>
          </div>
          <Recommendations currentData="movie" />
        </section>
      )}
    </PrimaryLayout>
  );
}
