import { useEffect, useState, useRef } from "react";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import Loading from "../../Components/Loading";
import { message } from "antd";
import {
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
  const [messageApi, messageContext] = message.useMessage();

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };
  useEffect(
    function () {
      getAPI();
      ScrollTop();
    },
    [timeParams, typeParams]
  );
  async function getAPI() {
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
      warning();
      setLoading(false);
    }
  }

  const ChangeType = (e) => {
    const TypeCurrent = e.target.value;
    navigate(`/filter/trend/${timeParams}/${TypeCurrent}`);
  };
  const ChangeTime = (e) => {
    const timeFilter = e.target.value;
    navigate(`/filter/trend/${timeFilter}/${typeParams}`);
  };
  return (
    <PrimaryLayout>
      <section className="trend">
        <Style>
          {messageContext}
          <div className="mt-5 container">
            <h1 className="pt-5 pb-5 ">
              Trend {timeParams}
              <span> {typeParams}</span>
            </h1>
            <div className="list row pb-5 ">
              <div className="time pb-3">
                <Radio.Group
                  size="large"
                  value={timeParams}
                  onChange={ChangeTime}
                >
                  <Radio.Button value="day">Day</Radio.Button>
                  <Radio.Button value="week">Week</Radio.Button>
                </Radio.Group>
              </div>
              <div className="type">
                <Radio.Group
                  value={typeParams}
                  onChange={ChangeType}
                  size="large"
                >
                  <Space>
                    <Radio.Button value="tv">Tv & Series</Radio.Button>
                    <Radio.Button value="movie">Movie</Radio.Button>
                    <Radio.Button value="all">All</Radio.Button>
                  </Space>
                </Radio.Group>
              </div>
            </div>
            <div className="flex">
              <div>
                
                {loading ? <Loading /> :<Card dataAPI={data} mediaType="" />}

              </div>
            </div>
          </div>
        </Style>
      </section>
      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
