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

export default function FilterTV() {
  const [genreTV, setGenreTV] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const { sortParams } = useParams();
  const [loading, setLoading] = useState(true);
  const [idGenre, setIdGenre] = useSearchParams("");
  const [queryPage, setQueryPage] = useSearchParams("1");
  const navigate = useNavigate();

  useEffect(function () {
    getGenre();
  }, []);
  useEffect(
    function () {
      getAPI(queryPage.get("page"), idGenre.get("genres"));
    },
    [sortParams, idGenre, queryPage]
  );

  async function getGenre() {
    try {
      const resTV = await API.get(`genre/tv/list?${KeyAPI}`);
      setGenreTV(resTV.data.genres);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  async function getAPI(page, genre) {
    try {
      const genreCurrent = genre ? genre : "";
      const resFilter = await API.get(
        `discover/tv?${KeyAPI}&language=en-US&sort_by=${sortParams}&with_genres=${genreCurrent}&page=${
          page ? page : "1"
        }`
      );
      setData(
        resFilter.data.results.filter((results) => results.poster_path !== null)
      );
      console.log(page);
      setCurrentPage(resFilter.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function renderGenre() {
    return genreTV.map(({ id, name }) => {
      return (
        <Radio.Button key={id} checked value={id}>
          {name}
        </Radio.Button>
      );
    });
  }

  const ChangeGenreID = (e) => {
    const TvID = e.target.value;
    setIdGenre(
      createSearchParams({
        genres: TvID,
        page: "1",
      })
    );
  };
  const ChangeSort = (e) => {
    const sortFilter = e.target.value;
    idGenre.get("genres")
      ? navigate(`/filter/tv/${sortFilter}?genres${idGenre.get("genres")}`)
      : navigate(`/filter/tv/${sortFilter}`);
  };
  function onPageChange(e) {
    idGenre.get("genres")
      ? setQueryPage(
          createSearchParams({
            genres: idGenre.get("genres"),
            page: e,
          })
        )
      : setQueryPage(
          createSearchParams({
            page: e,
          })
        );
  }

  return (
    <PrimaryLayout>
      <Style>
        <div className="mt-5 container">
          <h1 className="pt-5 pb-5 ">Filter Series & TV</h1>
          <div className="flex " style={{ justifyContent: "center" }}>
            <Radio.Group
              className="mb-3"
              value={sortParams}
              onChange={ChangeSort}
            >
              <Radio.Button value="name.asc">All</Radio.Button>
              <Radio.Button value="vote_average.asc">Top Rated</Radio.Button>
              <Radio.Button value="popularity.asc">Popular</Radio.Button>
              <Radio.Button value="first_air_date.asc">
                On Air Series
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="flex">
            <div className="mb-3 col-2">
              <h3 className="pb-5">Genre</h3>
              <Radio.Group value={idGenre} onChange={ChangeGenreID}>
                <Space direction="vertical">{renderGenre()}</Space>
              </Radio.Group>
            </div>
            <div className="col-10">
              <Card dataAPI={data} mediaType="tv" />
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
