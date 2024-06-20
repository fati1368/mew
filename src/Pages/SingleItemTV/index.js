import { useState, useEffect, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Recommendations from "../../Components/Recommendations";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { DetailMovie } from "../../Components/DetailMovie";
import Credit from "../../Components/Credit";
import Gallery from "../../Components/Gallery";
import PosterPic from "../../Components/PosterPic";
import { palette } from "../../Style/Theme";
import TitleSingleItemTV from "../../Components/TitleSingleItemTV";
import Video from "../../Components/Video";
import { FloatButton, message } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import Loading from "../../Components/Loading";
import NotFoundSingleMovie from "../../Components/NotFound";

export default function SingleItemTV() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
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
    ScrollTop();
  }, [id]);
  async function getAPI() {
    try {
      const res = await API.get(`tv/${id}?${KeyAPI}`);
      setData(res.data);
      setLoading(false);
      console.log(data, "fffffff");
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
        <div>
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
            <div className="Credit col-3">
              <Credit
                currentData="tv"
                callBackWriter={handleWriter}
                callBackDirector={handleDirector}
              />
            </div>
          </div>
          <Recommendations currentData="tv" />
        </div>
      );
    }
  };

  return (
    <PrimaryLayout>
      {messageContext}
      {loading === true ? (
        <Loading />
      ) : (
        <section className="single">{MyComponent()}</section>
      )}

      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
