import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import alertError from "../../Helpers/AlertError";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";

export default function Trend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("");
  const handlePlacement = (selectedPlacement) => {
    SetPlacement(selectedPlacement);
  };

  useEffect(
    function () {
      getAPI();
    },
    [placement]
  );
  function getAPI() {
    const time = placement === "day" ? "day" : "week";
    API.get(`trending/all/${time}?${KeyAPI}`)
      .then((res) => {
        setData(res.data.results.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        alertError();
        setLoading(false);
      });
  }
  return (
    <section className="trend ">
      <SectionTitle
        title="Trending"
        colorTitle={palette.fontColorSection}
        subTitleOne="MOST Trending MOVIES & Series RIGHT NOW:a"
        subTitleTwo="WHAT TO WATCH IN THEATERS AND STREAMING"
        filterBottom={APIrequest.trend}
        callBack={handlePlacement}
      />
      <Card dataAPI={data} mediaType="" />
    </section>
  );
}
