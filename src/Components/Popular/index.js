import { useEffect, useState } from "react";
import Card from "../Layout/Card";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import AlertError from "../../Helpers/AlertError";
import SectionTitle from "../SectionTitle";
import { APIrequest } from "../../Data/APIrequest";
import { palette } from "../../Style/Theme";

export default function Popular() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placement, SetPlacement] = useState("person");
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
        const resCorrect =
          placement === "person"
            ? res.data.results[5].known_for
            : res.data.results.slice(0, 6);
        setData(resCorrect);
        setLoading(false);
      })
      .catch((err) => {
        <AlertError />;
        setLoading(false);
      });
  }
  return (
    <section className="trend ">
      <SectionTitle
        title="What's Popular"
        colorTitle={palette.fontColor}
        subTitleOne="Discover the latest Popular"
        subTitleTwo="Movies and Series"
        filterBottom={APIrequest.Popular}
        callBack={handlePlacement}
      />
      <Card dataAPI={data} />
    </section>
  );
}
