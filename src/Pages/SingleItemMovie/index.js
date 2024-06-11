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
import TitleSingleItem from "../../Components/TitleSingleItem";
import ReactPlayer from "react-player";
import Video from "../../Components/Video";
import Recommendations from "../../Components/recommendations";

export default function SingleItemMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [dataCredit, SetDataCredit] = useState([]);
  const [writerFilter, setWriterFilter] = useState([]);
  const [directorFilter, setDirectorFilter] = useState([]);

  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
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
    API.get(`movie/${id}/credits?${KeyAPI}`)
      .then((res) => {
        SetDataCredit(
          res.data.cast.filter((cast) => cast.profile_path !== null)
        );
        setLoading(false);
        setWriterFilter(
          res.data.crew.filter((crew) => crew.department === "Writing")
        );
        setDirectorFilter(
          res.data.crew.filter((crew) => crew.job === "Director")
        );
      })
      .catch((err) => {
        setLoading(false);
      });
  }

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
            rate={data.vote_average}
          />
          <div className=" flex container ">
            <div className="col-9">
              <TitleSingleItem
                data={data}
                colorTitle={palette.fontColorSection}
              />
              <div>
                <h2 className="pb-5 pt-5">Gallery</h2>
                <div className="flex align-center">
                  <Gallery />
                  <PosterPic poster={data.poster_path} />
                </div>
                <Video />
              </div>
            </div>
            <div className="col-3">
              <Credit dataActing={dataCredit} />
            </div>

          </div>
          <Recommendations />
        </section>
      )}
    </PrimaryLayout>
  );
}
