import ScrollTop from "../../Helpers/ScrollTop";
import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Radio, Pagination, message, FloatButton, Space } from "antd";
import Card from "../../Components/Layout/Card";
import Style from "./style";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Loading from "../../Components/Loading";
export default function BestList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const { TypeParams } = useParams();
  const { ListParams } = useParams();
  const [loading, setLoading] = useState(true);
  const [queryPage, setQueryPage] = useSearchParams("1");
  const [messageApi, messageContext] = message.useMessage();
  const navigate = useNavigate();
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "please try again later",
    });
  };
  useEffect(
    function () {
      getAPI(queryPage.get("page"));
      ScrollTop();
    },
    [TypeParams, ListParams, queryPage]
  );
  async function getAPI(page) {
    try {
      const res = await API.get(
        `${TypeParams}/${ListParams}?${KeyAPI}&page=${page ? page : "1"}`
      );
      setData(
        res.data.results.filter((results) => results.poster_path !== null)
      );
      setCurrentPage(res.data);
      setLoading(false);
    } catch (err) {
      warning();
      setLoading(false);
    }
  }
  const currentType = TypeParams === "movie" ? "movie" : "tv";
  const formattedName = `${ListParams}`.replace(/_/g, " ");
  const changeList = (e) => {
    const list = e.target.value;
    navigate(`/bestList/${TypeParams}/${list}`);
  };
  const ChangeType = (e) => {
    const type = e.target.value;
    navigate(`/bestList/${type}/${ListParams}`);
  };
  function onPageChange(e) {
    setQueryPage(
      createSearchParams({
        page: e,
      })
    );
  }

  return (
    <PrimaryLayout>
      <section className="best-list">
        {messageContext}
        <Style>
          <div className="mt-5 container">
            <h1 className="pt-5 pb-5 ">
              <span> {formattedName}</span> {TypeParams}
            </h1>
            <div className="button flex ">
              <div className="type">
                <Radio.Group
                  className="mb-3"
                  value={TypeParams}
                  onChange={ChangeType}
                  size="large"
                >
                  <Radio.Button value="tv">Tv & Series</Radio.Button>
                  <Radio.Button value="movie"> Movie</Radio.Button>
                </Radio.Group>
              </div>
              <div className="list">
                <Radio.Group
                  size="large"
                  value={ListParams}
                  onChange={changeList}
                >
                  <Space>
                    <Radio.Button value="top_rated">Top Rated</Radio.Button>
                    {TypeParams === "tv" ? (
                      <Space>
                        <Radio.Button value="on_the_air">
                          On The Air
                        </Radio.Button>
                        <Radio.Button value="airing_today">
                          Airing Today
                        </Radio.Button>
                      </Space>
                    ) : (
                      <Space>
                        <Radio.Button value="now_playing">
                          Now Playing
                        </Radio.Button>
                        <Radio.Button value="upcoming">upcoming</Radio.Button>
                      </Space>
                    )}
                  </Space>
                </Radio.Group>
              </div>
            </div>
            <div className="flex">
              <div className="title mb-3 col-2">
                <p>B</p>
                <p>E</p>
                <p>S</p>
                <p className="pb-5 mb-3">T</p>
                <div className="secondary-vocab pt-5 mt-5">
                  <p>L</p>
                  <p>I</p>
                  <p>S</p>
                  <p>T</p>
                </div>
              </div>
              <div className="col-10 align-center">
                {loading ? (
                  <Loading />
                ) : (
                  <Card dataAPI={data} mediaType={currentType} />
                )}
              </div>
            </div>
            <Pagination
              onChange={onPageChange}
              Current={currentPage.page}
              total={currentPage.total_pages}
              style={{ colorText: "#FFF" }}
            />
          </div>
        </Style>
        <FloatButton.BackTop />
      </section>
    </PrimaryLayout>
  );
}
