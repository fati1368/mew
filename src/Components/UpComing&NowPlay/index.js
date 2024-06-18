import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";
import { message } from "antd";
import Loading from "../Loading";

export default function UpComingNowPlay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("now_playing");
  const [messageApi, messageContext] = message.useMessage();

  const handlePlacement = (selectedPlacement) => {
    SetPlacement(selectedPlacement);
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };

  useEffect(
    function () {
      getAPI();
    },
    [placement]
  );
  async function getAPI() {
    try {
      const res = await API.get(`movie/${placement}?${KeyAPI}`);
      setData(res.data.results.slice(0, 6));
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }

  return (
    <section className="Movie">
      {messageContext}
      <SectionTitle
        title="Movie"
        colorTitle={palette.fontColor}
        subTitleOne="MOST Trending MOVIES & Series RIGHT NOW:a"
        subTitleTwo="WHAT TO WATCH IN THEATERS AND STREAMING"
        filterBottom={APIrequest.movie}
        callBack={handlePlacement}
        link={`/bestList/movie/${placement}`}
      />
      {loading ? <Loading /> : <Card dataAPI={data} mediaType="movie" />}
    </section>
  );
}
