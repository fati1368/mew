import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";
import { message } from "antd";
import Loading from "../Loading";

export default function Popular() {
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
      const res =await API.get(`${placement}/popular?${KeyAPI}`);
      setData(res.data.results.slice(0, 6));
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  const currentProb = placement === "movie" ? "movie" : "tv";
  return (
    <section className="Popular ">
      {messageContext}
      <SectionTitle
        title="What's Popular"
        colorTitle={palette.fontColor}
        subTitleOne="Discover the latest Popular"
        subTitleTwo="Movies and Series"
        filterBottom={APIrequest.Common}
        callBack={handlePlacement}
        link={`/filter/${placement}/popularity.asc`}
      />
      {loading ? <Loading /> : <Card dataAPI={data} mediaType={currentProb} />}
    </section>
  );
}
