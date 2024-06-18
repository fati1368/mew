import { Button, Row, Col } from "antd";
import { Fragment, useEffect, useState, useRef } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import axios from "axios";
import MovieListByGenre from "../../Components/MovieListByGenre";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import { Radio, Pagination, List, Space } from "antd";
import Card from "../../Components/Layout/Card";
import Style from "./style";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";

export default function BestList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const { TypeParams } = useParams();
  const { ListParams } = useParams();
  const [loading, setLoading] = useState(true);
  const [idGenre, setIdGenre] = useSearchParams("");
  const [queryPage, setQueryPage] = useSearchParams("1");
  const navigate = useNavigate();

  useEffect(
    function () {
      getAPI(queryPage.get("page"), idGenre.get("genres"));
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
      console.log(err);
    }
  }

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
      <Style>
        <div className="mt-5 container">
          <h1 className="pt-5 pb-5 ">Filter Movie</h1>
          <div className="flex " style={{ justifyContent: "center" }}>
            <Radio.Group
              className="mb-3"
              value={TypeParams}
              onChange={ChangeType}
            >
              <Radio.Button value="tv">Tv & Series</Radio.Button>
              <Radio.Button value="movie"> Movie</Radio.Button>
            </Radio.Group>
          </div>
          <div className="flex">
            <div className="mb-3 col-2">
              <Radio.Group value={ListParams} onChange={changeList}>
                <Space direction="vertical">
                  <Radio.Button value="top_rated">Top Rated</Radio.Button>
                  {TypeParams === "tv" ? (
                    <div>
                      <Radio.Button value="on_the_air">On The Air</Radio.Button>
                      <Radio.Button value="airing_today">
                        Airing Today
                      </Radio.Button>
                    </div>
                  ) : (
                    <div>
                      <Radio.Button value="now_playing">
                        Now Playing
                      </Radio.Button>
                      <Radio.Button value="upcoming">upcoming</Radio.Button>
                    </div>
                  )}
                </Space>
              </Radio.Group>
            </div>
            <div className="col-10">
              <Card dataAPI={data} mediaType="movie" />
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
    </PrimaryLayout>
  );
}
