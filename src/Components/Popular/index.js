import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import alertError from "../../Helpers/AlertError";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";

export default function Popular() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("movie");
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
    API.get(`${placement}/popular?${KeyAPI}`)
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
    <section className="Popular ">
      <SectionTitle
        title="What's Popular"
        colorTitle={palette.fontColor}
        subTitleOne="Discover the latest Popular"
        subTitleTwo="Movies and Series"
        filterBottom={APIrequest.Common}
        callBack={handlePlacement}
      />
      <Card dataAPI={data} mediaType={currentProb} />
    </section>
  );
}
