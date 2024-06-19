import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import DetailCredit from "../../Components/DetailCredit";
import Credit from "../../Components/Credit";
import Gallery from "../../Components/Gallery";
import PosterPic from "../../Components/PosterPic";
import { palette } from "../../Style/Theme";
import TitleSingleItemTV from "../../Components/TitleSingleItemTV";
import ReactPlayer from "react-player";
import Video from "../../Components/Video";
import Recommendations from "../../Components/CombinedCredits";
import CombinedCredits from "../../Components/CombinedCredits";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";

export default function SingleItemCredit () {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getAPI();
    ScrollTop();
    setLoading(true);
  }, [id]);
  async function getAPI() {
    try {
      const res = await API.get(`person/${id}?${KeyAPI}`);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <PrimaryLayout>
      {loading === true ? (
        <h3>Please Waite</h3>
      ) : (
        <section>
          <DetailCredit
            birthday={data.birthday}
            deathday={data.deathday}
            data={data}
            background="/assets/Image/peakpx.jpg"
          />

          <CombinedCredits />
        </section>
      )}
            <FloatButton.BackTop />

    </PrimaryLayout>
  );
}
