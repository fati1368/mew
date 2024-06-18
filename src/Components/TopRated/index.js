import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";
import { message } from "antd";
import Loading from "../Loading";

export default function TopRated() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("movie");
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
      const res = await API.get(`${placement}/top_rated?${KeyAPI}`);
      setData(res.data.results.slice(0, 6));
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  const currentProb = placement === "movie" ? "movie" : "tv";

  return (
    <section className="TopRated ">
      {messageContext}
      <SectionTitle
        title="Top Rated"
        colorTitle={palette.fontColorSection}
        subTitleOne="MOST Top Rated MOVIES & Series RIGHT NOW"
        subTitleTwo="WHAT TO WATCH IN Movie"
        filterBottom={APIrequest.Common}
        callBack={handlePlacement}
        link={`/bestList/${placement}/top_rated`}
      />
      {loading ? <Loading /> : <Card dataAPI={data} mediaType={currentProb} />}
    </section>
  );
}
