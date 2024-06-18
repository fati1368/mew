import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";
import { message } from "antd";
import Loading from "../Loading";

export default function Trend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("day");
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
      const res = await API.get(`trending/all/${placement}?${KeyAPI}`);
      setData(res.data.results.slice(0, 6));
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  return (
    <section className="trend ">
      {messageContext}
      <SectionTitle
        title="Trending"
        colorTitle={palette.fontColorSection}
        subTitleOne="MOST Trending MOVIES & Series RIGHT NOW"
        subTitleTwo="WHAT TO WATCH IN THEATERS AND STREAMING"
        filterBottom={APIrequest.trend}
        callBack={handlePlacement}
        link={`/filter/trend/${placement}/movie`}
      />
      {loading ? <Loading /> : <Card dataAPI={data} mediaType="" />}
    </section>
  );
}
