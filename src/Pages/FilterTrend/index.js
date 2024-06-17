import { Button, Row, Col } from "antd";
import { Fragment, useEffect, useState, useRef } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Radio, Pagination, List, Space } from "antd";
import Card from "../../Components/Layout/Card";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Style from "./style";

export default function FilterTrend() {
  const [data, setData] = useState([]);
  const { timeParams } = useParams();
  const { typeParams } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(
    function () {
      getAPI();
    },
    [timeParams, typeParams]
  );
  async function getAPI( ) {
    try {
      const resFilter = await API.get(
        `trending/${typeParams}/${timeParams}?${KeyAPI}
        `
      );
      setData(
        resFilter.data.results.filter((results) => results.poster_path !== null)
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const ChangeType = (e) => {
    const TypeCurrent = e.target.value;
    navigate(`/filter/trend/${timeParams}/${TypeCurrent}`)

  };
  const ChangeTime = (e) => {
    const timeFilter = e.target.value;
     navigate(`/filter/trend/${timeFilter}/${typeParams}`)
  };
  return (
    <PrimaryLayout>
      <Style>
        <div className="mt-5 container">
          <h1 className="pt-5 pb-5 ">Trend</h1>
          <div className="flex " style={{ justifyContent: "center" }}>
            <Radio.Group
              className="mb-3"
              value={timeParams}
              onChange={ChangeTime}
            >
              <Radio.Button value="day">Day</Radio.Button>
              <Radio.Button value="week">Week</Radio.Button>
            </Radio.Group>
          </div>
          <div className="flex">
            <div className="mb-3 col-2">
              <Radio.Group value={typeParams} onChange={ChangeType}>
                <Space direction="vertical">
                  <Radio.Button value="tv">Tv & Series</Radio.Button>
                  <Radio.Button value="movie">Movie</Radio.Button>
                  <Radio.Button value="all">All</Radio.Button>
                </Space>
              </Radio.Group>
            </div>
            <div className="col-10">
              <Card dataAPI={data} mediaType="" />
            </div>
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}