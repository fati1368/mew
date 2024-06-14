import { useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import API from "../../Helpers/API";
import KeyAPI from "../../Helpers/KeyAPI";
import React from "react";
import { palette } from "../../Style/Theme";
import Style from "./style";
import { Button, Radio, Pagination, List, Input } from "antd";
import ResultSearch from "../../Components/ResultSearch";
import Card from "../../Components/Layout/Card";
import CardPerson from "../../Components/Layout/CardPerson";
import CardCollection from "../../Components/Layout/CardCollection";

export default function Search() {
  const [queryName, setQueryName] = useSearchParams();
  const [queryPage, setQueryPage] = useSearchParams();
  const [dataNull, setDataNull] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [dataPerson, setDataPerson] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [placement, SetPlacement] = useSearchParams("multi");

  useEffect(
    function () {
      getAPI(
        queryName.get("name") && queryName.get("name") !== "",
        queryPage.get("page")
      );
    },
    [queryPage, placement]
    // [pageSearchParams.get("page")]
  );
  async function getAPI(queryName, page = 1) {
    try {
      const res = await API.get(
        `search/${
          placement ? placement : "multi"
        }?${KeyAPI}&query=${queryName}&include_adult=false&language=en-US&pages=${page}`
      );
      setData(res.data);
      console.log(data, "1");
      sessionStorage.setItem("data", JSON.stringify(data));
      const dataJson = sessionStorage.getItem("data");
      const resultData = JSON.parse(dataJson);
      console.log(resultData, "1jason");

      const dataCurrent = data == null || data == undefined ? resultData : data;
      setDataNull(
        dataCurrent.results.filter(
          (results) =>
            results.poster_path !== null || results.profile_path !== null
        )
      );
      console.log(dataNull, "2n");

      sessionStorage.setItem("null", JSON.stringify(dataNull));
      const nullJason = sessionStorage.getItem("null");
      const resultNull = JSON.parse(nullJason);
      console.log(resultNull, "2jason");

      const nullCurrent =
        dataNull == null || dataNull == undefined ? dataNull : resultNull;

      setDataMovies(
        nullCurrent.filter(
          (nullCurrent) =>
            nullCurrent.media_type === "movie" ||
            nullCurrent.media_type === "tv"
        )
      );

      setDataPerson(
        nullCurrent.filter((nullCurrent) => nullCurrent.media_type === "person")
      );
    } catch (error) {
      console.error("Error data:", error);
    }
  }

  const onType = (e) => {
    const queryName = e.target.value.trim();
    if (queryName.length > 2) {
      setQueryName(createSearchParams({ name: queryName, page: "1" }));
      setTimeout(() => {
        getAPI(queryName);
      }, 1000);
    }
  };

  function onEnter(e) {
    if (e.key === "Enter") {
      const queryName = e.target.value.trim();
      if (queryName.length > 2) {
        navigate(`/search?name=${queryName}&page=1`);
      }
    }
  }
  function onPageChange(page) {
    navigate(
      `/search?name=${queryName.get("name")}&page=${page}&${placement.get(
        "place"
      )}`
    );
  }
  const placementChange = (e) => {
    const selectedPlacement = e.target.value;
    SetPlacement(
      createSearchParams({
        name: queryName.get("name"),
        page: "1",
        place: selectedPlacement,
      })
    );
  };

  return (
    <PrimaryLayout>
      <Style>
        <div className="container">
          <h1 className=" pb-5 pt-5"> Search</h1>
          <div className="search">
            <div className="input flex pb-5 pt-5">
              <input
                onKeyDown={onEnter}
                onChange={onType}
                placeholder="input search text"
                type="text"
              />
              <Button
                size="large"
                onClick={() => {
                  navigate(`/search?name=${queryName.get("name")}&page=1`);
                }}
              >
                Search
              </Button>
            </div>
            <div className="button flex  ">
              <Radio.Group
                className="mb-3"
                value={placement}
                onChange={placementChange}
              >
                <Radio.Button value="movie">Movies</Radio.Button>
                <Radio.Button value="tv">TV Shows</Radio.Button>
                <Radio.Button value="person">People</Radio.Button>
                <Radio.Button value="company">Companies</Radio.Button>
                <Radio.Button value="collection">Collections</Radio.Button>
                <Radio.Button value="multi">ALL</Radio.Button>
              </Radio.Group>
            </div>
            {/* <ResultSearch dataMovie={dataMovies} dataPerson={dataPerson}/> */}
            <Card dataAPI={dataMovies} mediaType="" />
            <CardPerson dataAPI={dataPerson} />
            {placement === "collection" ? (
              <CardCollection dataAPI={data.results} />
            ) : (
              ""
            )}
            {placement === "company" ? (
              <List
                size="large"
                bordered
                locale
                dataSource={data.results}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            ) : (
              ""
            )}

            <Pagination
              onChange={onPageChange}
              Current={data.page}
              total={data.total_pages}
              style={{ colorText: "#FFF" }}
            />
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
