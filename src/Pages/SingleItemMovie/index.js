import { useState, useEffect, Fragment } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { DetailMovie } from "../../Components/DetailMovie";
import Credit from "../../Components/Credit";
import Gallery from "../../Components/Gallery";
import PosterPic from "../../Components/PosterPic";
import { palette } from "../../Style/Theme";
import TitleSingleItemMovie from "../../Components/TitleSingleItemMovie";
import Video from "../../Components/Video";
import Recommendations from "../../Components/Recommendations";
import { FloatButton, message } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import Loading from "../../Components/Loading";
import NotFoundSingleMovie from "../../Components/NotFound";

export default function SingleItemMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [writerFilter, setWriterFilter] = useState([]);
  const [directorFilter, setDirectorFilter] = useState([]);
  const [messageApi, messageContext] = message.useMessage();
  const navigate = useNavigate();
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };

  useEffect(() => {
    getAPI();
    setLoading();
    ScrollTop();
  }, [id]);

  async function getAPI() {
    try {
      const res = await API.get(`movie/${id}?${KeyAPI}`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      warning();
      setLoading(false);
      navigate("/*");
    }
  }
  const handleWriter = (writerFilter) => {
    setWriterFilter(writerFilter);
  };
  const handleDirector = (directorFilter) => {
    setDirectorFilter(directorFilter);
  };

  const MyComponent = () => {
    if (data.backdrop_path == null) {
      return <NotFoundSingleMovie />;
    } else {
      return (
        <section className="movie">
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
      );
    }
  };

  return (
    <PrimaryLayout>
      {messageContext}
      {loading === true ? <Loading /> : MyComponent()}
      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
