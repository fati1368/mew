import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import alertError from "../../Helpers/AlertError";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";

export default function TopRated() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("movie");
  const handlePlacement = (selectedPlacement) => {
    SetPlacement(selectedPlacement);
  };
  console.log(data, "fat");
  useEffect(
    function () {
      getAPI();
    },
    [placement]
  );
  function getAPI() {
    API.get(`${placement}/top_rated?${KeyAPI}`)
      .then((res) => {
        setData(res.data.results.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        alertError();
        setLoading(false);
      });
  }
  const currentProb = placement === "movie" ? "movie" : "tv";

  return (
    <section className="TopRated ">
      <SectionTitle
        title="Top Rated"
        colorTitle={palette.fontColorSection}
        subTitleOne="MOST Trending MOVIES & Series RIGHT NOW:a"
        subTitleTwo="WHAT TO WATCH IN THEATERS AND STREAMING"
        filterBottom={APIrequest.Common}
        callBack={handlePlacement}
      />
      <Card dataAPI={data} mediaType={currentProb} />
    </section>
  );
}
