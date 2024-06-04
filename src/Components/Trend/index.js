import { useEffect, useState } from "react";
import KeyAPI from "../../Helpers/KeyAPI";
import API from "../../Helpers/API";
import AlertError from "../../Helpers/AlertError";
import Style from "./style";
import Card from "../Layout/Card";
import { palette } from "../../Style/Theme";
import { Radio, Select } from "antd";

export default function Trend() {
  const [data, setData] = useState([]);
  const [placement, SetPlacement] = useState("day");
  const [loading, setLoading] = useState(true);
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  useEffect(
    function () {
      getAPI();
    },
    [placement]
  );
  function getAPI() {
    const time= placement === "day" ? "day" : "week";
    API.get(`trending/all/${time}?${KeyAPI}`)
      .then((res) => {
        setData(res.data.results.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        <AlertError />;
        setLoading(false);
      });
  }

  return (
    <section className="trend ">
      <Style>
        <div className=" bg section-space relative">
          <div className="container relative">
            <div className="sectionTitle pb-5">
              <h2 style={{ color: `${palette.fontColorSection}` }}>
                Trending
              </h2>
              <h4>
                MOST Trending MOVIES & Series RIGHT NOW:
                <br />
                WHAT TO WATCH IN THEATERS AND STREAMING
              </h4>
            </div>
            <Radio.Group className="mb-3" value={placement} onChange={placementChange}>
              <Radio.Button value="day" >Today</Radio.Button>
              <Radio.Button value="week">This week</Radio.Button>
            </Radio.Group>
            <Card dataAPI={data} />
          </div>
        </div>
      </Style>
    </section>
  );
}
